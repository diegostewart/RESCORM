import React from 'react';
export default class LevelChoice extends React.Component {

  render(){
    

    return (
      <div className="levelChoiceWrapper">

        <div className="infoButtonWrapper">
          <a onClick={this.props.infoButton}><img src={"assets/images/Interfaz/info.png"} height="50" /></a>
        </div>
        <h1>Bienvenido al Juego Interactivo de Reciclaje</h1>
        <div className="levelChoiceButton">
          <button className="levelSelect1" onClick={this.props.onSelectLevel1} >LEVEL 1</button>
          <button className="levelSelect2" onClick={this.props.onSelectLevel2} >LEVEL 2</button>
          <button className="levelSelect3" onClick={this.props.onSelectLevel3} >LEVEL 3</button>

        </div>
        
      </div>
    );
  }
} 