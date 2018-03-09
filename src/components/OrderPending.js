import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/App.css';

class OrderPending extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NavLink to='drinkmenu'><button>Back</button></NavLink>












      </div>
    );
  }
}

export default OrderPending;
