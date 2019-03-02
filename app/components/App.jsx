import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';
import * as SAMPLES from '../config/preguntas.js';

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import FinishScreen from './FinishScreen.jsx';
import Quiz from './Quiz.jsx';
import LevelChoice from './LevelChoice.jsx';
import InfoScreen from './InfoScreen';

export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();
    this.state = {
      lvl: GLOBAL_CONFIG.lvl_selection // estoy hay que cambiarlo 
    }
  }

    onSelectLevel1(){
     this.setState({ // dispatch action
      lvl : 1
     }) 
  }
  onSelectLevel2(){
    this.setState({
     lvl : 2
    }) 
  }
 onSelectLevel3(){
    this.setState({
      lvl : 3
    }) 
  } 
infoButton(){
  this.setState({
   lvl : 4
  }) 
}
backButton(){
  this.setState({
   lvl : 0
  }) 
}

  render(){
    let appHeader = "";
    let appContent = "";
    

    if((this.props.tracking.finished !== true) || (GLOBAL_CONFIG.finish_screen === false)){

      //if(this.props.wait_for_user_profile !== true){ // Esta condición en realidad no es necesaria.
        
          switch (this.state.lvl){
            case 0:
            this.props.user_profile.learner_preference.difficulty = 0;
              appContent = (
                <LevelChoice infoButton={this.infoButton.bind(this)} onSelectLevel1={this.onSelectLevel1.bind(this)} onSelectLevel2={this.onSelectLevel2.bind(this)} onSelectLevel3={this.onSelectLevel3.bind(this)}/>
                );
            break;

            case 1:
            this.props.user_profile.learner_preference.difficulty = 1;
              appContent = (
                <Quiz dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.lista_preguntas} config={GLOBAL_CONFIG} I18n={I18n}/>
              );

              appHeader = (
                <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n}/>
              );
            break;

            case 2:
            this.props.user_profile.learner_preference.difficulty = 2;
              appContent = (
                <Quiz dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.lista_preguntas} config={GLOBAL_CONFIG} I18n={I18n}/>
              );
              appHeader = (
                <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n}/>
              );
            break;

            case 3:
            this.props.user_profile.learner_preference.difficulty = 3;
              appContent = (
                <Quiz dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.lista_preguntas} config={GLOBAL_CONFIG} I18n={I18n}/>
              );
              appHeader = (
                <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n}/>
              );
            break;

            case 4:
              appContent = (
                <InfoScreen backButton={this.backButton.bind(this)} />
              );
            break;

            default:
            this.props.user_profile.learner_preference.difficulty = 0;
              appContent = (
                <LevelChoice onSelectLevel1={this.onSelectLevel1.bind(this)} onSelectLevel2={this.onSelectLevel2.bind(this)} onSelectLevel3={this.onSelectLevel3.bind(this)}/>
                );
          }
        
      //}ESTO SOBRA TAMBIEN
    } else {
      appContent = (
        <FinishScreen dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.lista_preguntas} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    }

    return (

      <div className= "container" id="container">
        <SCORM dispatch={this.props.dispatch} tracking={this.props.tracking} config={GLOBAL_CONFIG}/>
        {appHeader}
        {appContent}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);