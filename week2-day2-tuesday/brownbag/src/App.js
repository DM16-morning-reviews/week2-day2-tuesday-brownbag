import React, { Component } from "react";
import logo from "./bobafett.jpg";
import "./App.css";

import axios from "axios";
import People from "./People";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      userInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/?page=1`).then(res => {
      const people = res.data.results;
      this.setState({ people });
    });
  }

  handleInput(val) {
    this.setState({
      userInput: val
    });
  }

  render() {
    const { people, userInput, addHeight } = this.state;
    let allPeople = people
      .filter(e => e.name.includes(userInput))
      .map((e, i) => {
        return (
          <People
            key={i}
            className="person"
            name={e.name}
            height={e.height}
            mass={e.mass}
          />
        );
      });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Star Wars App</h1>
        </header>
        <input
          placeholder="Search for person"
          style={{ marginTop: "15px" }}
          onChange={e => this.handleInput(e.target.value)}
        />
        <main className="main-content">{allPeople}</main>
      </div>
    );
  }
}

export default App;
