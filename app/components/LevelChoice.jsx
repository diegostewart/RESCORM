import React from 'react';
import './../assets/scss/level_choice.scss';

import {Row,Col,Container,Modal,Button} from 'react-bootstrap';

export default class LevelChoice extends React.Component {

  constructor(props){
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render(){
    


    return (
      <div className="levelChoiceWrapper">
        <div className="infoButtonWrapper">
          <a className="info" onClick={this.props.onSelectScreen.bind(this,2,0)}><img src={"assets/images/Interfaz/info.png"} height="50" /></a>
          <a className="information" onClick={this.handleShow}><img src={"assets/images/Interfaz/information.png"} height="15" /></a>
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


          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Información Adicional</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>El código es de dominio público y puede visitarlo en <a href="https://github.com/diegostewart/RESCORM"> GitHub. </a></p>
            <p>La aplicación tambien será accesible mediante <a href="https://github.com/diegostewart/RESCORM"> VisHub. </a></p>
            <p>Debo dar atribución a los recursos utilizados.</p>
            <a href="https://www.vecteezy.com">Free Vector Graphics by www.Vecteezy.com</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        </div>
      </div>
    );
  }
} 