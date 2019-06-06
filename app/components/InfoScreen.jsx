import React from 'react';
import './../assets/scss/info_screen.scss';
import {Button,Carousel} from 'react-bootstrap';

export default class InfoScreen extends React.Component {

  render(){
    

    return (
      <div className="infoScreenWrapper">
        <a onClick={this.props.onSelectScreen.bind(this,0,0)}><img src={"assets/images/Interfaz/back.png"} height="50" /></a>
        <div className="Cabecera">
          <h1> ¿Que hay que tirar en cada cubo?</h1>
        </div>
        <div className="Carrusel"> 
          <Carousel>
            <Carousel.Item>
              <img
                src="assets/images/Interfaz/cuboAzul.png"
                alt="Primera slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Cubo Azul</h3>
                <p>Envases de papel y carton</p>
                <Button onClick={this.props.onSelectScreen.bind(this,3,0,"Azul")} > Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="assets/images/Interfaz/cuboAmarillo.png"
                alt="Segunda slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Cubo Amarillo</h3>
                <p>Envases de plástico, latas y bricks</p>
                <Button onClick={this.props.onSelectScreen.bind(this,3,0,"Amarillo")} > Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="assets/images/Interfaz/cuboVerde.png"
                alt="Tercera slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Cubo Verde</h3>
                <p>Botellas y recipientes de Vidrio</p>
                <Button onClick={this.props.onSelectScreen.bind(this,3,0,"Verde")} > Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

             <Carousel.Item>
              <img
                src="assets/images/Interfaz/cuboMarron.png"
                alt="Cuarta slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Cubo Marrón</h3>
                <p>Restos Orgánicos</p>
                <Button onClick={this.props.onSelectScreen.bind(this,3,0,"Marron")} > Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

             <Carousel.Item>
              <img
                src="assets/images/Interfaz/cuboPuntoLimpio.png"
                alt="Quinta slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Punto Limpio</h3>
                <p>Residuos que no se pueden </p>
                <p> tirar a contenedores convencionales</p>
                <Button onClick={this.props.onSelectScreen.bind(this,3,0,"PuntoLimpio")}> Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

             <Carousel.Item>
              <img
                src="assets/images/Interfaz/cuboSigre.png"
                alt="Sexta slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Sigre</h3>
                <p>Envases y restos de medicamentos</p>
                <Button onClick={this.props.onSelectScreen.bind(this,3,0,"Sigre")} > Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
      </div>

    );
  }
} 