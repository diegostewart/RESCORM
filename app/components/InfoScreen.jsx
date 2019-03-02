import React from 'react';
export default class InfoScreen extends React.Component {

  render(){
    

    return (
      <div className="infoScreenWrapper">
        <a onClick={this.props.backButton}><img src={"assets/images/Interfaz/back.png"} height="50" /></a>
        <div className="images">

        <img src={"assets/images/Interfaz/cuboAzul.png"} height="200"  />
        <img src={"assets/images/Interfaz/cuboAmarillo.png"} height="200" />
        <img src={"assets/images/Interfaz/cuboMarron.png"} height="200" />
        <img src={"assets/images/Interfaz/cuboVerde.png"} height="200" />
        <img src={"assets/images/Interfaz/puntoLimpio.png"} height="200" />
        <img src={"assets/images/Interfaz/Sigre.png"} height="200" />
        
        </div>




      </div>
    );
  }
} 