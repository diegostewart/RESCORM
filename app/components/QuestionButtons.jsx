import React from 'react'; 
import * as Utils from '../vendors/Utils.js';
import Button from '../../node_modules/react-bootstrap/Button'; 


export default class QuestionButtons extends React.Component {
  constructor(props){
    super(props);
  }


  
  render(){
    let buttonQuestions ="";
    
    let botones = [
    <button key={"amarillo"} className="answerAmarillo" onClick={this.props.onAnswer.bind(this, "amarillo")}>Amarillo</button>,
    <button key={"verde"} className="answerVerde" onClick={this.props.onAnswer.bind(this, "verde")}>Verde</button>,
    <button key={"azul"} className="answerAzul" onClick={this.props.onAnswer.bind(this, "azul")}>Azul</button>,
    <button key={"marron"} className="answerMarron" onClick={this.props.onAnswer.bind(this, "marron")}>Marrón</button>,
    <button key={"puntolimpio"} className="answerPuntoLimpio" onClick={this.props.onAnswer.bind(this, "puntolimpio")}>Punto Limpio</button>,
    <button key={"sigre"} className="answerSigre" onClick={this.props.onAnswer.bind(this, "sigre")}>Sigre</button>
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
           <Button variant="warning">Warning</Button>   
          </div>
        </div>


    );
  }
}