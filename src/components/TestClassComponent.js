import React, { Component } from "react";

class TestClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome Visitor",
    };
  }

  clickHandler = () => {
    this.setState({
      message: "Thanks for subcribing",
    },
    ()=>{
        console.log("After set state")
    }
    );
    
  };

  render() {
      const {message} = this.state
    console.log("Rendering Class Component");
    return (
      <div>
        {message}
        <button onClick={() => this.clickHandler()}>Subscribe</button>
      </div>
    );
  }
}

export default TestClassComponent;