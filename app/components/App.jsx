import React from 'react';
import {connect} from 'react-redux';
import './../assets/scss/main.scss';

import {GLOBAL_CONFIG} from '../config/config.js';
import * as I18n from '../vendors/I18n.js';
import * as SAMPLES from '../config/preguntas.js';
import {renderScreen} from '../reducers/actions.jsx'

import SCORM from './SCORM.jsx';
import Header from './Header.jsx';
import FinishScreen from './FinishScreen.jsx';
import Quiz from './Quiz.jsx';
import LevelChoice from './LevelChoice.jsx';
import InfoScreen from './InfoScreen.jsx';
import InfoScreenCards from './InfoScreenCards.jsx';


export class App extends React.Component {
  constructor(props){
    super(props);
    I18n.init();

    this.state = {
      tarjetaSeleccionada:""
    };

  }

    onSelectScreen(index,dif,infoCardScreen){
      this.props.dispatch(renderScreen(index))
      if(dif != 0){
      this.props.user_profile.learner_preference.difficulty = dif;
      }
      if(typeof infoCardScreen === "string"){
        this.setState({tarjetaSeleccionada:infoCardScreen});
      }
  }

  render(){
    let appHeader = "";
    let appContent = "";
    let render = this.props.screen_render;

    let nivel = GLOBAL_CONFIG.lvl_selection;

    if(nivel>=0 && nivel <4){
      if(nivel!=0){
        this.props.dispatch(renderScreen(1))
        this.props.user_profile.learner_preference.difficulty = nivel;
      }
    }
    else{
      window.alert("Fichero de configuración erróneo: lvl_selection debe ser un valor de 1 a 3")
      return
    }

    if((this.props.tracking.finished !== true) || (GLOBAL_CONFIG.finish_screen === false)){
        
          switch (render){
            case 0:
              appContent = (
                <LevelChoice onSelectScreen={this.onSelectScreen.bind(this)} dispatch={this.props.dispatch} user_profile={this.props.user_profile} config={GLOBAL_CONFIG}/>
                );
            break;

            case 1:
              appContent = (
                <Quiz dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.lista_preguntas} config={GLOBAL_CONFIG} I18n={I18n}/>
              );

              appHeader = (
                <Header user_profile={this.props.user_profile} tracking={this.props.tracking} config={GLOBAL_CONFIG} I18n={I18n}/>
              );
            break;

            case 2:
              appContent = (
                <InfoScreen onSelectScreen={this.onSelectScreen.bind(this)} />
              );
            break;

            case 3:
              appContent = (
                <InfoScreenCards onSelectScreen={this.onSelectScreen.bind(this)} cuboSeleccionado={this.state.tarjetaSeleccionada}/>
              );
            break;

            default:
            this.props.user_profile.learner_preference.difficulty = 0;
              appContent = (
                <LevelChoice onSelectScreen={this.onSelectScreen.bind(this)} config={GLOBAL_CONFIG}/>
                );
          }        
    } else {
      appContent = (
        <FinishScreen dispatch={this.props.dispatch} user_profile={this.props.user_profile} tracking={this.props.tracking} quiz={SAMPLES.lista_preguntas} config={GLOBAL_CONFIG} I18n={I18n}/>
      );
    }

    return (

      <div className="contenedor">
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