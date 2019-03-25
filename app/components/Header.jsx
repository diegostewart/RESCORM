import React from 'react';
import {ProgressBar} from 'react-bootstrap';


export default class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let loggedText;
    let trackingTexts = [];
    let porcentajeTruncado = Math.trunc(this.props.tracking.progress_measure * 100);

    // if(typeof this.props.tracking.progress_measure === "number"){
    //   trackingTexts.push(this.props.I18n.getTrans("i.progress_measure") + ": " + (this.props.tracking.progress_measure * 100).toFixed(1) + "%");
    // } else {
    //   trackingTexts.push(this.props.I18n.getTrans("i.progress_measure") + ": null");
    // }
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

    return (
      <div className="header_wrapper">
        <a target="_blank" href="https://github.com/agordillo/RESCORM"><img src="assets/images/react_logo.png"/></a>
        <h1 id="heading">{this.props.I18n.getTrans("i.title")}</h1>
        <p id="tracking">{trackingEls}</p>
        {<ProgressBar  now={porcentajeTruncado} label={`${porcentajeTruncado}%`} />}
        {loggedEl} 
      </div>
    );
  }
}