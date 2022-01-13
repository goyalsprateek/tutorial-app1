import React, { Component } from "react";

export class EventHandler extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
  clickHandler = (message) => {
    console.log(`Button Clicked ${message}`);
    console.log(this)
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventHandler;
