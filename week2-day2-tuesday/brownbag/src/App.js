import React, { Component } from "react";
import logo from "./bobafett.jpg";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/?page=1`).then(res => {
      const people = res.data.results;
      console.log(res.data);
      this.setState({ people });
    });
  }

  render() {
    const { people } = this.state;
    let allPeople = people.map((e, i) => {
      return (
        <div key={i}>
          <h2>name: {e.name}</h2>
          <h4>height: {e.height}</h4>
          <h4>mass: {e.mass}</h4>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Star Wars App</h1>
        </header>
        <main>{allPeople}</main>
      </div>
    );
  }
}

export default App;
