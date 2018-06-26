import React, { Component } from "react";

class People extends Component {
  constructor(props) {
    super();
    this.state = {
      height: 0,
      mass: 0
    };
    this.decreaseHeight = this.decreaseHeight.bind(this);
    this.increaseHeight = this.increaseHeight.bind(this);
    this.decreaseMass = this.decreaseMass.bind(this);
    this.increaseMass = this.increaseMass.bind(this);
  }

  decreaseHeight() {
    this.setState({
      height: this.state.height - 1
    });
  }

  increaseHeight() {
    this.setState({
      height: this.state.height + 1
    });
  }

  decreaseMass() {
    this.setState({
      mass: this.state.mass - 1
    });
  }

  increaseMass() {
    this.setState({
      mass: this.state.mass + 1
    });
  }

  render() {
    const { name, height, mass } = this.props;
    const { height: stateHeight, mass: stateMass } = this.state;

    console.log(this.props);
    console.log(this.state);
    return (
      <div className="person">
        <h2>{name}</h2>
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "75%",
            justifyContent: "center"
          }}
        >
          <button onClick={this.decreaseHeight}>-</button>
          <h4 style={{ margin: "0 8px" }}>
            height:
            {parseInt(height) + stateHeight}
          </h4>
          <button onClick={this.increaseHeight}>+</button>
        </div>
        <div
          style={{
            display: "flex",
            margin: "auto",
            marginTop: "10px",
            width: "75%",
            justifyContent: "center"
          }}
        >
          <button onClick={this.decreaseMass}>-</button>
          <h4 style={{ margin: "0 8px" }}>
            mass:
            {parseInt(mass) + stateMass}
          </h4>
          <button onClick={this.increaseMass}>+</button>
        </div>
      </div>
    );
  }
}

export default People;
