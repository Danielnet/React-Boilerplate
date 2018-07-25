import React, { Component } from 'react';
import {DButton} from './Components/DButton';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current : 'Drum Machine',
      volume : 5
    }
    this.handleChange = this.handleChange.bind(this);
  }

  createAudio(objName,objSrc){
    let audioObj = objName;
    audioObj = new Audio();
    audioObj.src = 'https://s3.amazonaws.com/freecodecamp/drums/'+ (objSrc) +'.mp3';
    return audioObj
  }

  myCallback = (dataFromChild) => {
    this.setState({current : dataFromChild});
  }

  handleChange(event) {
    this.setState({volume: event.target.value});
  }


  render() {
    const buttons = () => {
      let padInfo = [
        ['Q','Heater-1','Heater 1'],
        ['W','Heater-2','Heater 2'],
        ['E','Heater-3','Heater 3'],
        ['A','Heater-4_1','Heater 4'],
        ['S','Heater-6','Clap'],
        ['D','Dsc_Oh','Open HH'],
        ['Z','Kick_n_Hat',"Kick n' Hat"],
        ['X','RP4_KICK_1','Kick'],
        ['C','Cev_H2','Closed HH']
      ]
      let tmp = [];
      for(var i = 0; i<9;i++){
        tmp.push(<DButton id={padInfo[i][0]} audio={this.createAudio(padInfo[i][0],padInfo[i][1])}
          callbackFromParent={this.myCallback} displayID={padInfo[i][2]} vol={this.state.volume}/>)
        }
        return tmp;
      }



      return (
        <div className="App">
          <div id="drum-machine">
            <header>
              <h1 id="display" className="title">{this.state.current}</h1>
            </header>
            <div className="button-display">
              {buttons()}
              <input type="range" min="0" max="10" value={this.state.volume} onChange={this.handleChange} className="bottom-slider"/>
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;
