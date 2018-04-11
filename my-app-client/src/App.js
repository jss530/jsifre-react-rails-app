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
        <div className="navbar">
          <p>NavBar</p>
        </div>
        <div className="App-intro">
           <p className="homepage-intro">Welcome to Ugly Delicious. We connect grocery stores looking to sell imperfect produce with
           individuals and businesses looking to purchase them.</p>
           <br/>
           Get started or Log in
        </div>
      </div>
    );
  }
}

export default App;
