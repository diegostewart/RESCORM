import React from 'react'; 
import {ProgressBar} from 'react-bootstrap';


export default class QuestionButtons extends React.Component {
  constructor(props){
    super(props);
  }

  setListDisabled(list){
    list.amarillo = "nothing"; //amarillo
    list.verde = "nothing"; //verde
    list.azul = "nothing"; //azul
    list.marron = "nothing"; //marron
    list.puntolimpio = "nothing"; //puntolimpio
    list.sigre = "nothing"; //sigre
  }
  insertButton(array,button,verde,rojo,clase){
    let source={ amarillo:"assets/images/Interfaz/cuboAmarillo.png",
              verde:"assets/images/Interfaz/cuboVerde.png",
              azul:"assets/images/Interfaz/cuboAzul.png",
              marron:"assets/images/Interfaz/cuboMarron.png",
              puntolimpio:"assets/images/Interfaz/cuboPuntoLimpio.png",
              sigre:"assets/images/Interfaz/cuboSigre.png"}; 


    let buttonType =  (
      <div className="ButtonWrapper" key={button}>
        <a onClick={this.props.onAnswer.bind(this,button)}><img className={clase} src={source[button]} height="100" /></a>
        <img className={verde} src={"assets/images/Interfaz/tic_Verde.png"} height="20"/> 
        <img className={rojo} src={"assets/images/Interfaz/tic_Rojo.png"} height="20"/> 
      </div> 
    );

    array.push(buttonType);
  }

  render(){
    let nextQuestionButton="";
    
    if(this.props.answered === true){ //Pregunta Contestada  
      if(this.props.renderNext === true){ // Renderizamos Boton de siguiente    
      nextQuestionButton = <a onClick={this.props.onNextQuestion.bind(this)}><img src={"assets/images/Interfaz/flecha.png"} height="75" /></a>
      }

      // this.setListDisabled(disableButton);
      // let bpress = this.props.buttonPressed;
      // if(this.props.correctAnswer){
      //   disableButton[bpress] = "acierto";
      //  }else{
      //    let correct = this.props.question.solucion;
      //   // disableButton[bpress] = "fallo"; // Esta se queda un poco mas visible que es la que has marcado
      //     disableButton[correct] = "correcta";
      //  }

      }

   
    let buttons = [];
    let tic = "tic";
    let hidden = "hidden";
    let clickable = "clickable"
    let notclickable = "notclickable"

    if(this.props.answered){ // Pregunta Contestada
      if(this.props.correctAnswer){ // Respuesta Correcta
        for (let i = 0; i < this.props.question.opciones.length; i++){
          if(this.props.question.opciones[i] !== this.props.question.solucion){
            this.insertButton(buttons,this.props.question.opciones[i],hidden,hidden,notclickable); // Nada en el resto
          } else{
            this.insertButton(buttons,this.props.question.solucion,tic,hidden,notclickable); //Tic en la correcta

          }
        }
      }else{ // Prengunta Contestada y Erronea
        
        for (let i = 0; i < this.props.question.opciones.length; i++){
          if(this.props.question.opciones[i]===this.props.buttonPressed){
            this.insertButton(buttons,this.props.question.opciones[i],hidden,tic,notclickable);// Cruz en la pulsada
          }else{
            if(this.props.question.opciones[i] !== this.props.question.solucion){
              this.insertButton(buttons,this.props.question.opciones[i],hidden,hidden,notclickable); // Nada en el resto.
            } else {
              this.insertButton(buttons,this.props.question.solucion,tic,hidden,notclickable); // Tic en la correctaa 

            }
          }
        }
      }
    } else{ // Si todavia no se ha contestado 
      //this.insertButton(buttons,this.props.question.solucion,hidden,hidden); // Lo comento para que la respuesta no siempre esté a la izda
      for (let i = 0; i < this.props.question.opciones.length; i++){
        this.insertButton(buttons,this.props.question.opciones[i],hidden,hidden,clickable); // Pinta todas las opciones sin tic o cruz
        
      }
    }
    
    return (
      <div className="Wrapper">
        <div className="questionButtonsWrapper">
           {buttons}
         </div>
        <div className="nextQuestion">
        <ProgressBar className={this.props.className} variant={this.props.variant} now={this.props.now}/>
         {nextQuestionButton}   
        </div>
       </div>


    );
  }
}