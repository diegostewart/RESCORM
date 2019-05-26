import React from 'react';

import {objectiveAccomplished} from './../reducers/actions';
import {Modal,Button} from 'react-bootstrap';


import QuestionButtons from './QuestionButtons.jsx';

export default class QuizQuestions extends React.Component {
  constructor(props){
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

    this.state = {
      answered:false,
      correctAnswer:false,
      renderNext:false,
      buttonPressed:"",
      show: false,
      feedback:"",
      time: {},
      seconds: 30,
      variant: "success",
      timer: "timer"
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount(){
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.timer = setInterval(this.countDown, 1000 );
  }
    
  
  componentWillUpdate(prevProps, prevState){
    if(prevProps.question !== this.props.question){
      this.setState({answered:false});
      this.setState({correctAnswer:false});
      this.setState({renderNext:false});
      this.setState({seconds:31});
      this.setState({timer:"timer"});
    }
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if(seconds >20 ){
      this.setState({variant:"success"})
    }
    if(seconds < 20 && seconds > 10){
      this.setState({variant:"warning"})
    }

    if(seconds < 10){
      this.setState({variant:"danger"})
    }
  
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
      this.onAnswer("answer");
    }
  }

  onAnswer(answer){
    let acierto = 0;

    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    
    if(this.state.renderNext === true){
      return;
    }

    if(this.props.question.solucion === answer){
      acierto +=1;
      this.setState({correctAnswer:true});
      this.setState({renderNext:true})
      if(this.props.question.feedback.positivo != "" && this.props.question.feedback.positivo != undefined){
        this.setState({feedback:this.props.question.feedback.positivo});
        this.handleShow();

      }
    }else{
        this.setState({renderNext:true})
        if(this.props.question.feedback.negativo != "" && this.props.question.feedback.positivo != undefined){
        this.setState({feedback:this.props.question.feedback.negativo})
        this.handleShow();
        }
    }

    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * acierto));
    this.setState({answered:true});
    this.setState({buttonPressed:answer});
    this.setState({timer:"hidden"});
  }


  render(){
    return (
      <div className="question">
        <h1>{this.props.question.nombre}</h1>
        <img className="image" src={this.props.question.imagen} height="200"/>
        <QuestionButtons I18n={this.props.I18n} className={this.state.timer} variant={this.state.variant} now={10*(this.state.time.s)/3} question={this.props.question} correctAnswer={this.state.correctAnswer} renderNext={this.state.renderNext} buttonPressed={this.state.buttonPressed} answered={this.state.answered} difficulty={this.props.difficulty} onAnswer={this.onAnswer.bind(this)}  onNextQuestion={this.props.onNextQuestion.bind(this)} allow_finish={this.props.isLastQuestion}/>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>FeedBack</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.feedback}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
}