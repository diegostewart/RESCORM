import React from 'react'; 
import * as Utils from '../vendors/Utils.js';


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


    // switch (this.props.difficulty){

    //   case 1:
    //   buttonQuestions = (
    //     <div className="questionButtonsWrapper">
    //       <button className="answerAmarillo" onClick={this.props.onAnswer.bind(this, "amarillo")} >Amarillo</button>
    //       <button className="answerMarron" onClick={this.props.onAnswer.bind(this, "marron")} >Marrón</button>
    //     </div>
    //   );
    //     break;

    //   case 2:
    //   buttonQuestions = (
    //     <div className="questionButtonsWrapper">
    //       <button className="answerAmarillo" onClick={this.props.onAnswer.bind(this, "amarillo")}>Amarillo</button>
    //       <button className="answerVerde" onClick={this.props.onAnswer.bind(this, "verde")}>Verde</button>
    //       <button className="answerAzul" onClick={this.props.onAnswer.bind(this, "azul")}>Azul</button>
    //       <button className="answerMarron" onClick={this.props.onAnswer.bind(this, "marron")}>Marrón</button>
    //     </div>
    //     );
    //    break;
      
    //    case 3:
    //    buttonQuestions = (
    //     <div className="questionButtonsWrapper">

    //       <a onClick={this.props.onAnswer.bind(this, "amarillo")}><img src={"assets/images/Interfaz/cuboAmarillo.png"} height="100" /></a>
    //       <a onClick={this.props.onAnswer.bind(this, "verde")}><img src={"assets/images/Interfaz/cuboVerde.png"} height="100" /></a>
    //       <a onClick={this.props.onAnswer.bind(this, "azul")}><img src={"assets/images/Interfaz/cuboAzul.png"} height="100" /></a>
    //       <a onClick={this.props.onAnswer.bind(this, "marron")}><img src={"assets/images/Interfaz/cuboMarron.png"} height="100" /></a>
    //       <a onClick={this.props.onAnswer.bind(this, "puntolimpio")}><img src={"assets/images/Interfaz/puntoLimpio.png"} height="120" /></a>
    //       <a onClick={this.props.onAnswer.bind(this, "sigre")}><img src={"assets/images/Interfaz/Sigre.png"} height="100" /></a>

    //       {/* <button className="answerAmarillo" onClick={this.props.onAnswerAmarillo}>Amarillo</button>
    //       <button className="answerVerde" onClick={this.props.onAnswerVerde}>Verde</button>
    //       <button className="answerAzul" onClick={this.props.onAnswerAzul}>Azul</button>
    //       <button className="answerMarron" onClick={this.props.onAnswerMarron}>Marrón</button>
    //       <button className="answerPuntoLimpio" onClick={this.props.onAnswerPuntoLimpio}>Punto Limpio</button>
    //       <button className="answerSIGRES" onClick={this.props.onAnswerSIGRES}>SIGRE</button> */}
    //     </div>
    //    );
    //    break;

    //    default:
    //    buttonQuestions = (
    //     <div className="questionButtonsWrapper">
    //       <h1>There was a problem with the difficulty, try to reload the page.</h1>
    //     </div>
    //   );

    // }
    return (
      <div className="Wrapper">
        <div className="questionButtonsWrapper">
           {buttonQuestions}
          </div>
        </div>


    );
  }
}