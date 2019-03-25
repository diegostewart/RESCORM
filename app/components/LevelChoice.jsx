import React from 'react';
import './../assets/scss/level_choice.scss';

import {Row,Col, Container,ProgressBar} from 'react-bootstrap';

export default class LevelChoice extends React.Component {

  render(){
    
    let nivel = this.props.config.lvl_selection;

    if(nivel>=0 && nivel <4){
      if(nivel!=0){
      this.props.dispatch(renderScreen(1))
      this.props.user_profile.learner_preference.difficulty = nivel;
      }
    }
    else{
      window.alert("Fichero de configuración erróneo: lvl_selection debe ser un valor de 1 a 3")
    }

    return (
      <div className="levelChoiceWrapper">
        <div className="infoButtonWrapper">
          <a onClick={this.props.onSelectScreen.bind(this,2,0)}><img src={"assets/images/Interfaz/info.png"} height="50" /></a>
        </div>
        <h1>Bienvenido al Juego Interactivo de Reciclaje</h1>
        <div className="levelChoiceButton">
        <Container>
          <Row>
            <Col> <button className="levelSelect1"  onClick={this.props.onSelectScreen.bind(this,1,1)} >LEVEL 1</button> </Col>
            <Col> <button className="levelSelect2"  onClick={this.props.onSelectScreen.bind(this,1,2)} >LEVEL 2</button> </Col>
            <Col> <button className="levelSelect3"  onClick={this.props.onSelectScreen.bind(this,1,3)} >LEVEL 3</button> </Col>
          </Row>
          </Container>
        </div>
      </div>
    );
  }
} 