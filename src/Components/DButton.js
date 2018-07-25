import React, { Component } from 'react';

export class DButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.audio.play();
    this.props.callbackFromParent(this.props.displayID)
    this.props.audio.volume = this.props.vol/10;
  }

  render(){
    return <button className="drum-pad" id={this.props.id} onClick={this.handleClick}>{this.props.id}</button>
  }
}
