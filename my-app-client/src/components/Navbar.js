import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#333',
  textDecoration: 'none',
  color: 'white'
}

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          color: 'black'
        }}
      >Home</NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          color: 'black'
        }}
      >About</NavLink>
      <NavLink
        to="/suppliers"
        exact
        style={link}
        activeStyle={{
          color: 'black'
        }}
      >Suppliers</NavLink>
      <NavLink
        to="/buyers"
        exact
        style={link}
        activeStyle={{
          color: 'black'
        }}
      >Buyers</NavLink>
    </div>
  );
};

export default Navbar;
