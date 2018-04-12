import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Suppliers from './components/Suppliers';
import Purchasers from './components/Purchasers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>UGLY DELICIOUS</h1>
            <p>Because ugly food needs love, too.</p>
        </header>

        <Router>
          <div>
           <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/suppliers" component={Suppliers} />
            <Route exact path="/purchasers" component={Purchasers} />
          </div>
        </Router>

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
//
//
// const App = (props) => {
//   return (
//     <Router>
//       <div>
//        <NavBar />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/actors" component={Actors} />
//         <Route exact path="/directors" component={Directors} />
//         <Route exact path="/movies" component={Movies} />
//       </div>
//     </Router>
//   );
// };
//
// export default App
