import React, { Component, Fragment } from "react";

// https://reactjs.org/docs/handling-events.html

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    console.log("this is:", this);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleClickFunctionWithE() {
    console.log("this is: ", this);
  }

  handleClickFunctionWithBind() {
    console.log("this is: ", this);
  }

  handleClickFunctionWithES6 = () => {
    console.log("this is: ", this);
  };

  render() {
    return (
      <Fragment>
        <button onClick={e => this.handleClick(e)}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={e => this.handleClickFunctionWithE(e)}>
          Click me 1
        </button>
        <button onClick={this.handleClickFunctionWithBind.bind(this)}>
          Click me 2
        </button>
        <button onClick={this.handleClickFunctionWithES6}>Click me 3</button>
      </Fragment>
    );
  }
}

export default Toggle;
