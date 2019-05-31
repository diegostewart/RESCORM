import React from 'react';

import {objectiveAccomplished} from './../reducers/actions';
import {Modal,Button} from 'react-bootstrap';


import QuestionButtons from './QuestionButtons.jsx';

export default class QuizQuestions extends React.Component {
  constructor(props){
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.timer = undefined;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

    this.state = {
      answered:false,
      correctAnswer:false,
      renderNext:false,
      buttonPressed:"",
      show: false,
      feedback:"",
      seconds: 150,
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

 

  componentDidMount(){
    this.startTimer();
  }
    
  
  componentWillUpdate(prevProps, prevState){
    if(prevProps.question !== this.props.question){
      this.setState({answered:false});
      this.setState({correctAnswer:false});
      this.setState({renderNext:false});
      this.setState({timer:"timer"});
    }
  }

  startTimer() {
    this.setState({seconds:300})
    if (typeof this.timer === "undefined") {
      this.timer = setInterval(this.countDown, 100);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds
    });

    if(seconds >200 ){
      this.setState({variant:"success"})
    }
    if(seconds < 200 && seconds > 100){
      this.setState({variant:"warning"})
    }

    if(seconds < 100){
      this.setState({variant:"danger"})
    }
  
    // Check if we're at zero.
    if (seconds == 0) { 
      this.onAnswer("answer");
    }
  }

  onAnswer(answer){
    let acierto = 0;


    
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
    clearInterval(this.timer);
    this.timer= undefined;

  }

  onNextQuestion(){
    this.props.onNextQuestion();
    this.startTimer();
  }


  render(){
    return (
      <div className="question">
        <h1>{this.props.question.nombre}</h1>
        <img className="image" src={this.props.question.imagen} height="200"/>
        <QuestionButtons I18n={this.props.I18n} className={this.state.timer} variant={this.state.variant} now={100*(this.state.seconds)/300} question={this.props.question} correctAnswer={this.state.correctAnswer} renderNext={this.state.renderNext} buttonPressed={this.state.buttonPressed} answered={this.state.answered} difficulty={this.props.difficulty} onAnswer={this.onAnswer.bind(this)}  onNextQuestion={this.onNextQuestion.bind(this)} allow_finish={this.props.isLastQuestion}/>

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