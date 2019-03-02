import React from 'react';

import * as Utils from '../vendors/Utils.js';
import {objectiveAccomplished, objectiveAccomplishedThunk} from './../reducers/actions';

import QuestionButtons from './QuestionButtons.jsx';

export default class QuizQuestions extends React.Component {
  constructor(props){
    super(props);
  }

  onAnswerAmarillo(){
    let acierto = 0;
    if(this.props.question.solucion === "amarillo"){
      acierto +=1;
    }
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * acierto));
    this.setState({answered:true});
    this.props.onNextQuestion();
  }

    onAnswerVerde(){
    let acierto = 0;
    if(this.props.question.solucion === "verde"){
      acierto +=1;
    }
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * acierto));
    this.setState({answered:true});
    this.props.onNextQuestion();
  }

    onAnswerAzul(){
    let acierto = 0;
    if(this.props.question.solucion === "azul"){
      acierto +=1;
    }
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * acierto));
    this.setState({answered:true});
    this.props.onNextQuestion();
  }
  onAnswerMarron(){
    let acierto = 0;
    if(this.props.question.solucion === "marron"){
      acierto +=1;
    }
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * acierto));
    this.setState({answered:true});
    this.props.onNextQuestion();
  }

  onAnswerPuntoLimpio(){
    let acierto = 0;
    if(this.props.question.solucion === "punto limpio"){
      acierto +=1;
    }
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * acierto));
    this.setState({answered:true});
    this.props.onNextQuestion();
  }

  onAnswerSIGRES(){
    let acierto = 0;
    if(this.props.question.solucion === "sigres"){ // this.props.question.soluciones.indexOf("sigres") != -1; 
      acierto +=1;
    }
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * acierto));
    this.setState({answered:true});
    this.props.onNextQuestion();
  }


  onNextQuestion(){ // Creo que esto sobra. 
    this.props.onNextQuestion();
  }
  render(){
    return (
      <div className="question">
        <h1>{this.props.question.nombre}</h1>
        <img src={this.props.question.imagen}/>

        <QuestionButtons I18n={this.props.I18n} difficulty={this.props.difficulty} onAnswerPuntoLimpio={this.onAnswerPuntoLimpio.bind(this)} onAnswerSIGRES={this.onAnswerSIGRES.bind(this)} onAnswerVerde={this.onAnswerVerde.bind(this)} onAnswerMarron={this.onAnswerMarron.bind(this)} onAnswerAzul={this.onAnswerAzul.bind(this)} onAnswerAmarillo={this.onAnswerAmarillo.bind(this)}  allow_finish={this.props.isLastQuestion}/>
      </div>
    );
  }
}