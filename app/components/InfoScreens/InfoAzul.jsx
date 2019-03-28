import React from 'react';
import './../../assets/scss/info_screen_azul.scss';
import * as INFORMACION from '../../config/info_cubos.js';
import {Card,Button,Row} from 'react-bootstrap';

export default class InfoAzul extends React.Component {

  constructor(props){
    super(props);

     this.state = {
      text_display:"Pulsa cualquier botón para mostrar la información correspondiente a ese panel"
    };

  }
 
  

    getRandomText(seccion){
      let info = INFORMACION.info;
      let index = Math.floor(Math.random() * info.contenedor[seccion].length);
      this.setState({text_display:info.contenedor[seccion][index].texto}) 
    }

    
  render(){

    return (
      <div className="InfoAzulWrapper">
        <a className="back" onClick={this.props.onSelectScreen.bind(this,2,0)}><img src={"assets/images/Interfaz/back.png"} height="50" /></a>
      
        <Row>
          <Card className="tarjeta" style={{ width: '18rem' }}>
            <Card.Img className="foto" variant="top" src="assets/images/Interfaz/cuboAzul.png" />
            <Card.Body>
              <Card.Title className="titulo" >¿Qué hay que meter?</Card.Title>
              <Card.Text>
                Podrás aprender que productos, alimentos o envases están destinados a 
                ser depositados en este contenedor.
              </Card.Text>
              <Button className="boton" variant="primary" onClick={this.getRandomText.bind(this,"depositar_azul")}>Infórmate</Button>
            </Card.Body>
          </Card>

          <Card className="tarjeta" style={{ width: '18rem' }}>
            <Card.Img className="foto" variant="top" src="assets/images/Interfaz/error.jpg" />
            <Card.Body>
              <Card.Title className="titulo" >Errores más comunes</Card.Title>
              <Card.Text>
                Podrás aprender los errores más comunes que comete la gente
                a la hora de tirar productos en este contenedor.
              </Card.Text>
              <Button className="boton" variant="primary" onClick={this.getRandomText.bind(this,"error_azul")}>Infórmate</Button>
            </Card.Body>
          </Card>

          <Card className="tarjeta" style={{ width: '18rem' }}>
            <Card.Img className="foto" variant="top" src="assets/images/Interfaz/reciclaje.jpg" />
            <Card.Body>
              <Card.Title className="titulo" >Proceso de reciclaje</Card.Title>
              <Card.Text>
                Podrás aprender el proceso de reciclaje que se lleva a cabo con los productos
                que se tiran en este contenedor.
              </Card.Text>
              <Button className="boton" variant="primary" onClick={this.getRandomText.bind(this,"reciclar_azul")}>Infórmate</Button>
            </Card.Body>
          </Card>

          <Card className="tarjeta" style={{ width: '18rem' }}>
            <Card.Img className="foto" variant="top" src="assets/images/Interfaz/curiosidad.jpg" />
            <Card.Body>
              <Card.Title className="titulo" >Curiosidades</Card.Title>
              <Card.Text>
                Podrás aprender algunas curiosidades sobre este contenedor y sus productos reciclados.
              </Card.Text>
              <Button className="boton" variant="primary" onClick={this.getRandomText.bind(this,"curiosidad_azul")}>Infórmate</Button>
            </Card.Body>
          </Card>
        </Row>

        <Card className="infoDisplay">
            <Card.Body>
              <Card.Text>
                  {this.state.text_display} 
              </Card.Text>
            </Card.Body>
          </Card>

      </div>
    );
  }
} 