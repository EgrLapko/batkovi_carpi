import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        <ul className = 'navbar'>
            <li><NavLink exact to="/" activeClassName="active-class" >Головна</NavLink></li>
            <li><NavLink to="/about" activeClassName="active-class">Про нас</NavLink></li>
            <li><NavLink to="/gallery" activeClassName="active-class">Галерея</NavLink></li>
            <li><NavLink to="/products" activeClassName="active-class">Продукція</NavLink></li>
      </ul>
    )
  }
}
