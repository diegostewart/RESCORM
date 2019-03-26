import React from 'react';
import './../assets/scss/info_screen.scss';
import {Card,Button,Carousel} from 'react-bootstrap';

export default class InfoScreen extends React.Component {

  render(){
    

    return (
      // <div className="infoScreenWrapper">
      //   <a onClick={this.props.onSelectScreen.bind(this,0,0)}><img src={"assets/images/Interfaz/back.png"} height="50" /></a>
      //   <div className="images">

      //   <img src={"assets/images/Interfaz/cuboAzul.png"} height="200"  />
      //   <img src={"assets/images/Interfaz/cuboAmarillo.png"} height="200" />
      //   <img src={"assets/images/Interfaz/cuboMarron.png"} height="200" />
      //   <img src={"assets/images/Interfaz/cuboVerde.png"} height="200" />
      //   <img src={"assets/images/Interfaz/puntoLimpio.png"} height="200" />
      //   <img src={"assets/images/Interfaz/Sigre.png"} height="200" />
      //   </div>
      //   <Card style={{ width: '18rem' }}>
      //       <Card.Img variant="top" src="assets/images/Interfaz/cuboAzul.png" />
      //       <Card.Body>
      //         <Card.Title>Card Title</Card.Title>
      //         <Card.Text>
      //           Some quick example text to build on the card title and make up the bulk of
      //           the card's content.
      //         </Card.Text>
      //         <Button variant="primary">Go somewhere</Button>
      //       </Card.Body>
      //     </Card>



      // </div>
      <div className="infoScreenWrapper">
        <a onClick={this.props.onSelectScreen.bind(this,0,0)}><img src={"assets/images/Interfaz/back.png"} height="50" /></a>
        <div className="Cabecera">
          <h1> ¿Que hay que tirar en cada cubo?</h1>
        </div>
        <div className="Carrusel"> 
          <Carousel>
            <Carousel.Item>
              <img
                //className="prueba" // className="d-block w-100"
                src="assets/images/Interfaz/cuboAzul.png"
                alt="Primera slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Cubo Azul</h3>
                <p>Envases de papel y carton</p>
                <Button> Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                //className="d-block h-100"
                src="assets/images/Interfaz/cuboAmarillo.png"
                alt="Segunda slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Cubo Amarillo</h3>
                <p>Envases de plástico, latas y bricks</p>
                <Button> Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                //className="d-block h-100"
                src="assets/images/Interfaz/cuboVerde.png"
                alt="Tercera slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Cubo Verde</h3>
                <p>Botellas y recipientes de Vidrio</p>
                <Button> Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

             <Carousel.Item>
              <img
                //className="d-block h-100" // className="d-block w-100"
                src="assets/images/Interfaz/cuboMarron.png"
                alt="Cuarta slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Cubo Marrón</h3>
                <p>Restos Orgánicos</p>
                <Button> Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

             <Carousel.Item>
              <img
                //className="d-block h-100" // className="d-block w-100"
                src="assets/images/Interfaz/puntoLimpio.png"
                alt="Quinta slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Punto Limpio</h3>
                <p>Residuos que no se pueden </p>
                <p> tirar a contenedores convencionales</p>
                <Button> Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>

             <Carousel.Item>
              <img
                //className="d-block h-100" // className="d-block w-100"
                src="assets/images/Interfaz/Sigre.png"
                alt="Sexta slide"
                hspace="50"
              />
              <Carousel.Caption>
                <h3>Sigre</h3>
                <p>Envases y restos de medicamentos</p>
                <Button> Aprender más </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
      </div>

    );
  }
} 