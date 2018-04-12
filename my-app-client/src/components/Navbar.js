import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'black'
}

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'grey'
        }}
      >Home</NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'grey'
        }}
      >About</NavLink>
      <NavLink
        to="/suppliers"
        exact
        style={link}
        activeStyle={{
          background: 'grey'
        }}
      >Suppliers</NavLink>
      <NavLink
        to="/purchasers"
        exact
        style={link}
        activeStyle={{
          background: 'grey'
        }}
      >Purchasers</NavLink>
    </div>
  );
};

export default Navbar;
