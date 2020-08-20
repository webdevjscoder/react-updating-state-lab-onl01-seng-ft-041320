// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.count + 1
      }
    })
  }

  render() {
    return (
      <label for="timesClicked">{this.state.timesClicked}</label>
      <button onClick={this.handleClick}></button>
    )
  }
}
