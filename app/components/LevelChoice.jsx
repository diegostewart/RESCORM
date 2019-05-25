import React from 'react';
import './../assets/scss/level_choice.scss';
import {renderScreen} from '../reducers/actions.jsx'

import {Row,Col, Container} from 'react-bootstrap';

export default class LevelChoice extends React.Component {

  render(){
    


    return (
      <div className="levelChoiceWrapper">
        <div className="infoButtonWrapper">
          <a className="info" onClick={this.props.onSelectScreen.bind(this,2,0)}><img src={"assets/images/Interfaz/info.png"} height="50" /></a>
          <a className="git" target="_blank" href="https://github.com/diegostewart/RESCORM"><img src="assets/images/Interfaz/IconoQuiz.png" height="50" /></a>
        </div>
        <h1>Bienvenido al Juego Interactivo de Reciclaje</h1>
        <div className="levelChoiceButton">
        <Container>
          <Row>
            <Col> <button className="levelSelect1"  onClick={this.props.onSelectScreen.bind(this,1,1)} >NIVEL 1</button> </Col>
            <Col> <button className="levelSelect2"  onClick={this.props.onSelectScreen.bind(this,1,2)} >NIVEL 2</button> </Col>
            <Col> <button className="levelSelect3"  onClick={this.props.onSelectScreen.bind(this,1,3)} >NIVEL 3</button> </Col>
          </Row>
          </Container>
        </div>
      </div>
    );
  }
} 