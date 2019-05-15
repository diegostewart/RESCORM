import React from 'react'; 

export default class QuestionButton extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    let button = this.props.cubo;
    let source={ amarillo:"assets/images/Interfaz/cuboAmarillo.png",
              verde:"assets/images/Interfaz/cuboVerde.png",
              azul:"assets/images/Interfaz/cuboAzul.png",
              marron:"assets/images/Interfaz/cuboMarron.png",
              puntolimpio:"assets/images/Interfaz/cuboPuntoLimpio.png",
              sigre:"assets/images/Interfaz/cuboSigre.png"}; 

    return (
        <div className="ButtonWrapper">
          <a onClick={this.props.onAnswer.bind(this,button)}><img className="contenedor" src={source[button]} height="100" /></a>
          <img className="hidden" src={"assets/images/Interfaz/tic_Verde.png"} height="20"/> 
          <img className="tic" src={"assets/images/Interfaz/tic_Rojo.png"} height="20"/>                        
        </div>
    );
  }
}