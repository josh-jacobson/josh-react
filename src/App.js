import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Hello React!</h2>
            <Link to={'/chris'}>
              {'Chris'}
            </Link>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <Link to={'/chris'}>
        {'Chris'}
      </Link>
      <Link to={'/josh'}>
        {'Josh'}
      </Link>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
}

const Chris = () => {
  <div>
    <h1>Hello Chris!</h1>
  </div>
}

export default App;
