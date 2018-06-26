import React, { Component } from "react";

class People extends Component {
  constructor(props) {
    super();
    this.state = {
      height: 0,
      addHeight: false
    };
    this.decreaseHeight = this.decreaseHeight.bind(this);
    this.increaseHeight = this.increaseHeight.bind(this);
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

  render() {
    const { name, height, mass } = this.props;
    const { height: stateHeight } = this.state;

    console.log(this.props);
    console.log(this.state);
    return (
      <div className="person">
        <h2>{name}</h2>
        <div style={{ display: "flex", margin: "auto", width: "60%" }}>
          <button onClick={this.decreaseHeight}>-</button>
          <h4 style={{ margin: "0 8px" }}>
            height:
            {parseInt(height) + stateHeight}
          </h4>
          <button onClick={this.increaseHeight}>+</button>
        </div>
        <h4>mass: {mass}</h4>
      </div>
    );
  }
}

export default People;

// {addHeight ? parseInt(this.props.height, 10) + 50 : this.props.height}
