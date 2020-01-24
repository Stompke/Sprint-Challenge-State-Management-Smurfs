import React, { Component } from "react";
import "./App.css";

import Smurfs from './Smurfs';
import Form from './Form';




class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <h1>List of All Smurfs</h1>

        <Smurfs />
      </div>
    );
  }
}

export default App;
