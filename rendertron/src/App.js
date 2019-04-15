import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link
            className="App-link"
            to={"/about"}
          >
            Aboutへ遷移
          </Link>
        </header>
      </div>
    );
  }
}

export default App;
