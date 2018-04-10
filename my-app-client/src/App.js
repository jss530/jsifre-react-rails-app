import React, { Component } from 'react';
// import logo from './logo.svg'; maybe add your own logo later?
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>UGLY DELICIOUS</h1>
            <p>Because ugly food needs love, too.</p>
        </header>
        <p className="App-intro">
           Welcome to Ugly Delicious. We connect grocery stores looking to sell imperfect produce with
           individuals and businesses looking to purchase them.
        </p>
      </div>
    );
  }
}

export default App;
