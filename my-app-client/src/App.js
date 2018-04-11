import React, { Component } from 'react';
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

        <div className="container">
          <div className="App-intro">
             <div className="homepage-intro">
               <p>Welcome to Ugly Delicious. We connect grocery stores looking to sell imperfect produce with
               individuals and businesses looking to purchase them.</p>
               <br/>
               <button type="button" id="intro-button">Get started</button>
               <div class="divider"/>
               <button type="button" id="intro-button">Log in</button>
             </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
