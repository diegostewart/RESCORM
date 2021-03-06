import React from 'react';
import './../assets/scss/info_screen_cards.scss';
import * as INFORMACION from '../config/info_cubos.js';
import {Card,Button,Row} from 'react-bootstrap';

export default class InfoScreenCards extends React.Component {

  constructor(props){
    super(props);

     this.state = {
      infoSiguiente:"hidden",
      cuenta:0,
      boton:"",
      text_display:"Pulsa cualquier botón para mostrar la información correspondiente a ese panel"
    }
  }
 
    getRandomText(seccion){
      let info = INFORMACION.info; 
      // Devuelven un indice aleatorio de la lista.
      // let index = Math.floor(Math.random() * info.contenedor[seccion].length);
      let _cuenta = this.state.cuenta;
      if(this.state.infoSiguiente === "hidden"){
        this.setState({infoSiguiente:"info"})
      }
      

      if(this.state.boton === seccion){
        _cuenta = _cuenta+1;
        if(_cuenta === info.contenedor[seccion].length){
          _cuenta = 0;
        }
        let contador = _cuenta + 1 + "/" + info.contenedor[seccion].length + " - " 
        this.setState({cuenta:_cuenta,text_display:contador + " " + info.contenedor[seccion][_cuenta].texto});
      }else{
        _cuenta = 0;
        let contador = _cuenta + 1 + "/" + info.contenedor[seccion].length + " - " 
        this.setState({boton:seccion,cuenta: _cuenta, text_display:contador + " " + info.contenedor[seccion][_cuenta].texto});
      }
    }  
    
  render(){
    let cubo = this.props.cuboSeleccionado;
    let imgCubo = "assets/images/Interfaz/cubo" + cubo + ".png";
    let depositar = "depositar_" + cubo;
    let error = "error_" + cubo;
    let reciclar = "reciclar_" + cubo;
    let curiosidad = "curiosidad_" + cubo;

    return (
      <div className="InfoScreenCardsWrapper">
        <a className="back" onClick={this.props.onSelectScreen.bind(this,2,0)}><img src={"assets/images/Interfaz/back.png"} height="50" /></a>
      
        <Row>
          <Card className="tarjeta" style={{ width: '18rem' }}>
            <Card.Img className="foto" variant="top" src={imgCubo} />
            <Card.Body>
              <Card.Title className="titulo" >¿Qué hay que meter?</Card.Title>
              <Card.Text>
                Podrás aprender que productos, alimentos o envases están destinados a 
                ser depositados en este contenedor.
              </Card.Text>
              <Button className="boton" variant="primary" onClick={this.getRandomText.bind(this,depositar)}>Infórmate</Button>
            </Card.Body>
          </Card>

          <Card className="tarjeta" style={{ width: '18rem' }}>
            <Card.Img className="foto" variant="top" src="assets/images/Interfaz/error.png" />
            <Card.Body>
              <Card.Title className="titulo" >Errores más comunes</Card.Title>
              <Card.Text>
                Podrás aprender los errores más comunes que comete la gente
                a la hora de tirar productos en este contenedor.
              </Card.Text>
              <Button className="boton" variant="primary" onClick={this.getRandomText.bind(this,error)}>Infórmate</Button>
            </Card.Body>
          </Card>

          <Card className="tarjeta" style={{ width: '18rem' }}>
            <Card.Img className="foto" variant="top" src="assets/images/Interfaz/reciclaje.png" />
            <Card.Body>
              <Card.Title className="titulo" >Proceso de reciclaje</Card.Title>
              <Card.Text>
                Podrás aprender el proceso de reciclaje que se lleva a cabo con los productos
                que se tiran en este contenedor.
              </Card.Text>
              <Button className="boton" variant="primary" onClick={this.getRandomText.bind(this,reciclar)}>Infórmate</Button>
            </Card.Body>
          </Card>

          <Card className="tarjeta" style={{ width: '18rem' }}>
            <Card.Img className="foto" variant="top" src="assets/images/Interfaz/curiosidad.png" />
            <Card.Body>
              <Card.Title className="titulo" >Curiosidades</Card.Title>
              <Card.Text>
                Podrás aprender algunas curiosidades sobre este contenedor y sus productos reciclados.
              </Card.Text>
              <Button className="boton" variant="primary" onClick={this.getRandomText.bind(this,curiosidad)}>Infórmate</Button>
            </Card.Body>
          </Card>
        </Row>

        <Card className="infoDisplay">
            <Card.Body>
              <Card.Text>
                  {this.state.text_display} 
              </Card.Text>
            </Card.Body>
            <div className="arrowContainer">
              <a  className={this.state.infoSiguiente} > Pulsa de nuevo el botón para obtener más información. </a>
            </div>
          </Card>

      </div>
    );
  }
} 