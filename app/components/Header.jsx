import React from 'react';
import {ProgressBar} from 'react-bootstrap';


export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let loggedText;
    let headerRender;
    let trackingTexts = [];
    let porcentajeTruncado = Math.trunc(this.props.tracking.progress_measure * 100);
    let dif = this.props.user_profile.learner_preference.difficulty;
    if(this.props.user_profile.learner_preference.difficulty == 4){
      dif = "Aleatoria"
    }

    if(typeof this.props.tracking.score === "number"){
      trackingTexts.push(this.props.I18n.getTrans("i.score") + ": " + (this.props.tracking.score * 100).toFixed(1) + "%");
    } else {
      trackingTexts.push(this.props.I18n.getTrans("i.score") + ": null");
    }
    if(this.props.user_profile){
      if((typeof this.props.user_profile.name === "string")){
        loggedText = (this.props.I18n.getTrans("i.logged_as") + " " + this.props.user_profile.name);
      }
      if(typeof this.props.user_profile.learner_preference === "object"){
        if(typeof this.props.user_profile.learner_preference.difficulty === "number"){
          trackingTexts.push(this.props.I18n.getTrans("i.difficulty") + ": " + this.props.user_profile.learner_preference.difficulty);
        }
      }
    }

    let loggedEl = null;
    if(typeof loggedText === "string"){
      loggedEl = <p id="logged_user">{loggedText}</p>;
    }
    let trackingEls = trackingTexts.map(function(text, index){
      return <span key={index}>{text}</span>;
    });
    headerRender =(
      <h3>
      <span className="puntuacion" >{"Puntuación: "+(this.props.tracking.score * 100).toFixed(1) + "%"} </span>
      <span className="dificultad" >{"Dificultad: " + dif} </span>
      </h3>
    );

    return (
      <div className="header_wrapper">
        <h1 id="heading">QUIZ DE RECICLAJE</h1>
        {headerRender}
        <ProgressBar className="progressBar"  now={porcentajeTruncado} label={`${porcentajeTruncado}%`}/>  
        {loggedEl} 
      </div>
    );
  }
}