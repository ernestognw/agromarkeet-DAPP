import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { agroMarkeet } from './agroMarkeet';
import web3 from './web3';
import WebApp from './page/containers/webApp';

class App extends Component {

  render() {
    return (
      <WebApp />
    );
  }
}

export default App;
