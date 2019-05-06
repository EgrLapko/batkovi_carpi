import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        <ul className = 'navbar'>
            <li><NavLink exact to="/" activeClassName="active-class" >Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active-class">About Us</NavLink></li>
            <li><NavLink to="/gallery" activeClassName="active-class">Media</NavLink></li>
            <li><NavLink to="/products" activeClassName="active-class">Products</NavLink></li>
      </ul>
    )
  }
}
