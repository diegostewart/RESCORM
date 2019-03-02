import React from 'react'; 

export default class QuestionButtons extends React.Component {
  constructor(props){
    super(props);
  }


  
  render(){
    let buttonQuestions ="";
    //let array = [<button className="answerAmarillo" onClick={this.props.onAnswerAmarillo} >Amarillo</button>,<button className="answerAmarillo" onClick={this.props.onAnswerAmarillo} >Amarillo2</button>];
    switch (this.props.difficulty){

      case 1:
      buttonQuestions = (
        <div className="questionButtonsWrapper">
          <button className="answerAmarillo" onClick={this.props.onAnswerAmarillo} >Amarillo</button>
          <button className="answerMarron" onClick={this.props.onAnswerMarron} >Marrón</button>
        </div>
      );
        break;

      case 2:
      buttonQuestions = (
        <div className="questionButtonsWrapper">
          <button className="answerAmarillo" onClick={this.props.onAnswerAmarillo}>Amarillo</button>
          <button className="answerVerde" onClick={this.props.onAnswerVerde}>Verde</button>
          <button className="answerAzul" onClick={this.props.onAnswerAzul}>Azul</button>
          <button className="answerMarron" onClick={this.props.onAnswerMarron}>Marrón</button>
        </div>
        );
       break;
      
       case 3:
       buttonQuestions = (
        <div className="questionButtonsWrapper">

          <a onClick={this.props.onAnswerAmarillo}><img src={"assets/images/Interfaz/cuboAmarillo.png"} height="100" /></a>
          <a onClick={this.props.onAnswerVerde}><img src={"assets/images/Interfaz/cuboVerde.png"} height="100" /></a>
          <a onClick={this.props.onAnswerAzul}><img src={"assets/images/Interfaz/cuboAzul.png"} height="100" /></a>
          <a onClick={this.props.onAnswerMarron}><img src={"assets/images/Interfaz/cuboMarron.png"} height="100" /></a>
          <a onClick={this.props.onAnswerPuntoLimpio}><img src={"assets/images/Interfaz/puntoLimpio.png"} height="120" /></a>
          <a onClick={this.props.onAnswerSIGRES}><img src={"assets/images/Interfaz/Sigre.png"} height="100" /></a>

          {/* <button className="answerAmarillo" onClick={this.props.onAnswerAmarillo}>Amarillo</button>
          <button className="answerVerde" onClick={this.props.onAnswerVerde}>Verde</button>
          <button className="answerAzul" onClick={this.props.onAnswerAzul}>Azul</button>
          <button className="answerMarron" onClick={this.props.onAnswerMarron}>Marrón</button>
          <button className="answerPuntoLimpio" onClick={this.props.onAnswerPuntoLimpio}>Punto Limpio</button>
          <button className="answerSIGRES" onClick={this.props.onAnswerSIGRES}>SIGRE</button> */}
        </div>
       );
       break;

       default:
       buttonQuestions = (
        <div className="questionButtonsWrapper">
          <h1>There was a problem with the difficulty, try to reload the page.</h1>
        </div>
      );

    }
    return (
      <div className="Wrapper">
        {buttonQuestions}
        </div>


    );
  }
}