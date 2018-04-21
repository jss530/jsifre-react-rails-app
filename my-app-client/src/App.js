import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Suppliers from './containers/Suppliers';
import SuppliersShow from './containers/SuppliersShow';
import Purchasers from './components/Purchasers';



const App = (props) => {
  return (
        <Router>
          <div>
           <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/suppliers" component={Suppliers} />
              <Route path="/suppliers/:supplierId" component={SuppliersShow} />
            <Route exact path="/purchasers" component={Purchasers} />
          </div>
        </Router>
      );
    };

export default App;
