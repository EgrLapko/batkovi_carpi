import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {ProductConsumer} from '../../context/context';

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {handleMenu} = value;
          return (
            <React.Fragment>
              <ul className = 'navbar'>
                <li><NavLink exact to="/" activeClassName="active-class">Головна</NavLink></li>
                <li><NavLink to="/about" activeClassName="active-class">Про нас</NavLink></li>
                <li><NavLink to="/gallery" activeClassName="active-class">Галерея</NavLink></li>
                <li><NavLink to="/products" activeClassName="active-class">Продукція</NavLink></li>
              </ul>

              <ul className = 'navbar-small'>
                <li className="nav-logo"><Link to = "/"><img src="./icon_white.png" alt=""/></Link></li>
                <li className="hamburger" onClick={handleMenu}><i className ="fas fa-bars"></i></li>
              </ul>
            </React.Fragment>        
          )
        }}
      </ProductConsumer>

        
    )
  }
}
