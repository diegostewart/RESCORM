import React from 'react';

import * as Utils from '../vendors/Utils.js';
import {objectiveAccomplished, objectiveAccomplishedThunk} from './../reducers/actions';
import {Modal,Button} from 'react-bootstrap';


import QuestionButtons from './QuestionButtons.jsx';

export default class QuizQuestions extends React.Component {
  constructor(props){
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      answered:false,
      correctAnswer:false,
      renderNext:false,
      buttonPressed:"",
      show: false,
      feedback:""
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentWillUpdate(prevProps, prevState){
    if(prevProps.question !== this.props.question){
      this.setState({answered:false});
      this.setState({correctAnswer:false});
      this.setState({renderNext:false})
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
  }


  render(){
    return (
      <div className="question">
        <h1>{this.props.question.nombre}</h1>
        <img className="image" src={this.props.question.imagen} height="200"/>

        <QuestionButtons I18n={this.props.I18n} question={this.props.question} correctAnswer={this.state.correctAnswer} renderNext={this.state.renderNext} buttonPressed={this.state.buttonPressed} answered={this.state.answered} difficulty={this.props.difficulty} onAnswer={this.onAnswer.bind(this)}  onNextQuestion={this.props.onNextQuestion.bind(this)} allow_finish={this.props.isLastQuestion}/>

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