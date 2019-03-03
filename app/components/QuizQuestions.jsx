import React from 'react';

import * as Utils from '../vendors/Utils.js';
import {objectiveAccomplished, objectiveAccomplishedThunk} from './../reducers/actions';

import QuestionButtons from './QuestionButtons.jsx';

export default class QuizQuestions extends React.Component {
  constructor(props){
    super(props);
  }


  onAnswer(answer){
    let acierto = 0;
    if(this.props.question.solucion === answer){
      acierto +=1;
    }
    let objective = this.props.objective;
    this.props.dispatch(objectiveAccomplished(objective.id, objective.score * acierto));
    this.setState({answered:true});
    this.props.onNextQuestion();
  }

  render(){
    return (
      <div className="question">
        <h1>{this.props.question.nombre}</h1>
        <img src={this.props.question.imagen}/>
        <QuestionButtons I18n={this.props.I18n} question={this.props.question} difficulty={this.props.difficulty} onAnswer={this.onAnswer.bind(this)}  allow_finish={this.props.isLastQuestion}/>
      </div>
    );
  }
}