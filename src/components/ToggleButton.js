// Component Code Goes Here
// Component Code Goes Here
import React from 'react';

export default class ToggleButton extends React.Component{
  //constructor
  constructor(){
      super();
      this.state = {
          isEnabled: false
      }
  }

  render(){
    return(
        <button className="ToggleButton">
          Toggle status: {this.state.isEnabled? 'ON' : 'OFF'}
        </button>
    );
  }
}
