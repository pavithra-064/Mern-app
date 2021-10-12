/*
import React, { Component } from "react";
import "./App.css";
import Routes from './Routes';

export default class App extends Component {
  state = {
    message: "",
    error: "",
    eee: "",
    text: ""
  };

  componentDidMount = () => this.fetchAPIMessage();

  fetchAPIMessage = async () => {
    try {
      const res = await fetch(`/api/message`);
      const { message } = await res.json();
      this.setState({ message });
    } catch (err) {
      console.error(err);
    }
  };

  //render = () => {
   return(
    <div className="App">
    <Routes />
     </div>
  );
//}
//}

*/
import React from 'react';
import './App.css';
import Routes from './Routes';

function App(){
   return(
     <div className="App">
      <Routes />
    </div>
);
}
export default App;
