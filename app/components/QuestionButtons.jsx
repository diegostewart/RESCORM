import React from 'react'; 
import * as Utils from '../vendors/Utils.js';


export default class QuestionButtons extends React.Component {
  constructor(props){
    super(props);
  }
    
  render(){
    let buttonQuestions ="";
    let nextQuestionButton="";
    let disableButton=""; 

    if(this.props.answered === true){        
      nextQuestionButton = <a onClick={this.props.onNextQuestion.bind(this)}><img src={"assets/images/Interfaz/flecha.png"} height="75" /></a>
      disableButton="disabled";
      }

    
    let botones = [
    <a onClick={this.props.onAnswer.bind(this, "amarillo")} key={"amarillo"} className={disableButton}><img src={"assets/images/Interfaz/cuboAmarillo.png"} height="100" /></a>,
    <a onClick={this.props.onAnswer.bind(this, "verde")} key={"verde"} className={disableButton}><img src={"assets/images/Interfaz/cuboVerde.png"} height="100" /></a>,
    <a onClick={this.props.onAnswer.bind(this, "azul")} key={"azul"} className={disableButton}><img src={"assets/images/Interfaz/cuboAzul.png"} height="100" /></a>,
    <a onClick={this.props.onAnswer.bind(this, "marron")} key={"marron"} className={disableButton}><img src={"assets/images/Interfaz/cuboMarron.png"} height="100" /></a>,
    <a onClick={this.props.onAnswer.bind(this, "puntolimpio")} key={"puntoLimpio"} className={disableButton}><img src={"assets/images/Interfaz/puntoLimpio.png"} height="100" /></a>,
    <a onClick={this.props.onAnswer.bind(this, "sigre")} key={"sigre"} className={disableButton}><img src={"assets/images/Interfaz/Sigre.png"} height="100" /></a>,  
    ];
    
    let buttonRender = []; 
    for (let i = 0; i < this.props.question.opciones.length; i++) {
      
      switch(this.props.question.opciones[i]){ 

        case "amarillo":
        buttonRender.push(botones[0]);
        break;

        case "verde":
        buttonRender.push(botones[1]);
        break;

        case "azul":
        buttonRender.push(botones[2]);
        break;

        case "marron":
        buttonRender.push(botones[3]);
        break;

        case "puntolimpio":
        buttonRender.push(botones[4]);
        break;

        case "sigre":
        buttonRender.push(botones[5]);
        break;
      }
    }

    switch(this.props.question.solucion){ // la solución tiene que estar siempre 

      case "amarillo":
      buttonRender.push(botones[0]);
      break;

      case "verde":
      buttonRender.push(botones[1]);
      break;

      case "azul":
      buttonRender.push(botones[2]);
      break;

      case "marron":
      buttonRender.push(botones[3]);
      break;

      case "puntolimpio":
      buttonRender.push(botones[4]);
      break;

      case "sigre":
      buttonRender.push(botones[5]);
      break;
    }

      buttonQuestions = (
        Utils.shuffleArray(buttonRender) 
      );    

      

    return (
      <div className="Wrapper">
        <div className="questionButtonsWrapper">
           {buttonQuestions}             
         </div>
        <div className="nextQuestion">
         {nextQuestionButton}   
        </div>
       </div>


    );
  }
}