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
import Buyers from './components/Buyers';


const App = (props) => {
  return (
        <Router>
          <div>
           <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/suppliers" component={Suppliers} />
              <Route exact path="/suppliers/:supplierId/produce" component={SuppliersShow} />
            <Route exact path="/buyers" component={Buyers} />
          </div>
        </Router>
      );
    };

export default App;
