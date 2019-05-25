import React from 'react';
import './../assets/scss/quiz.scss';

import * as Utils from '../vendors/Utils.js';
import {addObjectives, resetObjectives, finishApp} from './../reducers/actions';

import QuizHeader from './QuizHeader.jsx';
import QuizQuestions from './QuizQuestions.jsx';

export default class Quiz extends React.Component {
  constructor(props){
    super(props);
    let quiz = this.props.quiz;
    let questions = quiz.questions;
    let inicioSlice;
    let finalSlice;

    // Adaptive behaviour
    // Sort questions based on difficulty
     let adaptive_sorted = false;

     questions.sort(function(a, b){ return a.dificultad - b.dificultad; }); // Ordenamos por orden de dificultad

    if((this.props.config.adaptive === true) && (typeof props.user_profile === "object") && (typeof props.user_profile.learner_preference === "object") && (typeof props.user_profile.learner_preference.difficulty === "number")){
      let difficulty = props.user_profile.learner_preference.difficulty; 
      if((difficulty >= 0) && (difficulty <= 3)){
        for(let i = 0; i < questions.length; i++){
          if((typeof questions[i].dificultad !== "number") || (questions[i].dificultad < 0) || (questions[i].dificultad > 3)){
            questions[i].dificultad = 1;
          }
          if(questions[i].dificultad === difficulty){// calculamos solo las preguntas asociadas a nuestra dificultad.
            if(typeof inicioSlice === "undefined"){
              inicioSlice = i;
              finalSlice = i;
            }
            finalSlice = finalSlice + 1;
          }
        }
        //Truncamos el array para solo tener el nivel de dificultad seleccionado:
       

        questions = questions.slice(inicioSlice,finalSlice);

        questions = this.setProbability(questions);

        questions = Utils.shuffleArray(questions);
        
        adaptive_sorted = true;
      }
    }

    if(adaptive_sorted === false){
      questions = Utils.shuffleArray(questions);
    }

    if((typeof this.props.config.n === "number") && (this.props.config.n >= 1)){
      // Limit number of questions
      questions = questions.slice(0, Math.min(this.props.config.n, questions.length));
    }

    quiz.questions = questions;

    this.state = {
      quiz:quiz,
      current_question_index:1,
    };
  }
  componentDidMount(){
    // Create objectives (One per question included in the quiz)
    let objectives = [];
    let nQuestions = this.state.quiz.questions.length;
    for(let i = 0; i < nQuestions; i++){
      objectives.push(new Utils.Objective({id:("Question" + (i + 1)), progress_measure:(1 / nQuestions), score:(1 / nQuestions)}));
    }
    this.props.dispatch(addObjectives(objectives));
  }

  setProbability(questions){
    let newQuestions = [];

    let azulQuestion = this.getQuestion(questions,"azul");
    let amarilloQuestion = this.getQuestion(questions,"amarillo");
    let verdeQuestion = this.getQuestion(questions,"verde");
    let marronQuestion = this.getQuestion(questions,"marron");
    let puntolimpioQuestion = this.getQuestion(questions,"puntolimpio");
    let sigreQuestion = this.getQuestion(questions,"sigre");

    azulQuestion = Utils.shuffleArray(azulQuestion);
    amarilloQuestion = Utils.shuffleArray(amarilloQuestion);
    verdeQuestion = Utils.shuffleArray(verdeQuestion);
    marronQuestion = Utils.shuffleArray(marronQuestion);
    puntolimpioQuestion = Utils.shuffleArray(puntolimpioQuestion);
    sigreQuestion = Utils.shuffleArray(sigreQuestion);



    //console.log("Preguntas Totales = " + azulQuestion.length+amarilloQuestion.length+verdeQuestion.length+marronQuestion.length+puntolimpioQuestion.length+sigreQuestion.length)


    //Parametros de configuracion
    let azul = this.props.config.probability.azul;
    let amarillo = this.props.config.probability.amarillo;
    let verde = this.props.config.probability.verde;
    let marron = this.props.config.probability.marron;
    let puntolimpio = this.props.config.probability.puntolimpio;
    let sigre = this.props.config.probability.sigre;

    let total = azul+amarillo+verde+marron+puntolimpio+sigre;
    

    //Probabilidad asignada
    let pAzul = azul/total;
    let pAmarillo = amarillo/total;	
    let pVerde = verde/total;
    let pMarron = marron/total;
    let pPuntoLimpio = puntolimpio/total;
    let pSigre = sigre/total;



    //Rango de cada probabilidad
    let rangoAzul = 0 + pAzul;			
    let rangoAmarillo = rangoAzul + pAmarillo;
    let rangoVerde = rangoAmarillo + pVerde;
    let rangoMarron = rangoVerde + pMarron;
    let rangoPuntoLimpio = rangoMarron + pPuntoLimpio;
    let rangoSigre = rangoPuntoLimpio + pSigre;

    for(let i = 0; i < questions.length; i++){
      let randomNumber = Math.random();

        if ( randomNumber < rangoAzul && azulQuestion.length > 0){
          // meto pregunta azul
          newQuestions.push(azulQuestion.shift());
        }
        else if (randomNumber > rangoAzul && randomNumber < rangoAmarillo && amarilloQuestion.length > 0){
          // meto pregunta amarilla
          newQuestions.push(amarilloQuestion.shift());
        }
        else if (randomNumber > rangoAmarillo && randomNumber < rangoVerde && verdeQuestion.length > 0){
          // meto pregunta Verde
          newQuestions.push(verdeQuestion.shift());
        }
        else if (randomNumber > rangoVerde && randomNumber < rangoMarron && marronQuestion.length > 0){
          // meto pregunta Marron
          newQuestions.push(marronQuestion.shift());
        }
        else if (randomNumber > rangoMarron && randomNumber < rangoPuntoLimpio && puntolimpioQuestion.length > 0){
          // meto pregunta PuntoLimpio
          newQuestions.push(puntolimpioQuestion.shift());
        }
        else if (randomNumber > rangoPuntoLimpio && randomNumber < rangoSigre && sigreQuestion.length > 0){
          // meto pregunta Sigre
          newQuestions.push(sigreQuestion.shift());
        }
     }
     
     if((typeof this.props.config.n === "number") && (this.props.config.n >= 1)){
        let preguntasRestantes = [];
        if(newQuestions.length >= this.props.config.n){
          return newQuestions;
        } 
        else{
            let azulQuestionlength = azulQuestion.length; //Es necesario crear una variable xke el azulQuestion.length varia al hacer el .shift
            if(pAzul > 0 && azulQuestion.length > 0){
              for(let p = 0; p<azulQuestionlength; p++){
                preguntasRestantes.push(azulQuestion.shift());
              }
            }
            let amarilloQuestionlength =amarilloQuestion.length;
            if(pAmarillo > 0 && amarilloQuestion.length > 0){
              for(let p = 0; p<amarilloQuestionlength; p++){
                preguntasRestantes.push(amarilloQuestion.shift());
              }
            }
            let verdeQuestionlength = verdeQuestion.length;
            if(pVerde > 0 && verdeQuestion.length > 0){
              for(let p = 0; p<verdeQuestionlength; p++){
                preguntasRestantes.push(verdeQuestion.shift());
              }
            }
            let marronQuestionlength = marronQuestion.length;
            if(pMarron > 0 && marronQuestion.length > 0){
              for(let p = 0; p<marronQuestionlength; p++){
                preguntasRestantes.push(marronQuestion.shift());
              }
            }
            let puntolimpioQuestionlength = puntolimpioQuestion.length;
            if(pPuntoLimpio > 0 && puntolimpioQuestion.length > 0){
              for(let p = 0; p<puntolimpioQuestionlength; p++){
                preguntasRestantes.push(puntolimpioQuestion.shift());
              }
            }
            let sigreQuestionlength = sigreQuestion.length;
            if(pSigre > 0 && sigreQuestion.length > 0){
              for(let p = 0; p<sigreQuestionlength; p++){
                preguntasRestantes.push(sigreQuestion.shift());
              }
            }
            let preguntasRestanteslength = preguntasRestantes.length;
            preguntasRestantes = Utils.shuffleArray(preguntasRestantes);
          for(let x = 0; x < preguntasRestanteslength; x++){
            newQuestions.push(preguntasRestantes.shift());
          }
          return newQuestions
        }
     }
     else{
       return newQuestions
     }
  }

  getQuestion(questions,solution){
    let questionBySolution = [];

    for (let i = 0; i < questions.length; i++) {
      if(questions[i].solucion===solution){
        questionBySolution.push(questions[i]);
      }
    }
    return questionBySolution;
  }

  onNextQuestion(){
    let isLastQuestion = (this.state.current_question_index === this.state.quiz.questions.length);
    if(isLastQuestion === false){
      this.setState({current_question_index:(this.state.current_question_index + 1)});
    } else {
      this.props.dispatch(finishApp(true));
    }
  }

  onResetQuiz(){
    this.setState({current_question_index:1});
    this.props.dispatch(resetObjectives());
  }

  render(){
    let currentQuestion = this.state.quiz.questions[this.state.current_question_index - 1];
    let isLastQuestion = (this.state.current_question_index === this.state.quiz.questions.length);
    let difficulty = this.props.user_profile.learner_preference.difficulty;

    let objective = this.props.tracking.objectives["Question" + (this.state.current_question_index)];
    let onNextQuestion = this.onNextQuestion.bind(this);
    let onResetQuiz = this.onResetQuiz.bind(this);
    let currentQuestionRender = "";

    if(difficulty<4){
      currentQuestionRender = (<QuizQuestions quiz={this.props.quiz} question={currentQuestion} difficulty={this.props.user_profile.learner_preference.difficulty} dispatch={this.props.dispatch} I18n={this.props.I18n} objective={objective}  onNextQuestion={onNextQuestion} onResetQuiz={onResetQuiz} isLastQuestion={isLastQuestion} quizCompleted={this.props.tracking.finished}/>);
    }
    else{
      currentQuestionRender = "Question difficulty not supported";
    }

    return (
      <div className="quiz">
        <QuizHeader I18n={this.props.I18n} quiz={this.state.quiz} currentQuestionIndex={this.state.current_question_index}/>
        {currentQuestionRender}
      </div>
    );
  }
}