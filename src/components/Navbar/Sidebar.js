import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {ProductConsumer} from '../../context/context';

export default class Sidebar extends Component {
  render() {
    return (
        <ProductConsumer>
            {value => {
                const {openMenu, closeMenu} = value;
                return (
                    <ul className={"slidemenu " + (openMenu ? "slide-visible" : null)}>
                        <li><NavLink exact to="/" activeClassName="active-class" onClick={closeMenu} >Головна</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active-class" onClick={closeMenu} >Про нас</NavLink></li>
                        <li><NavLink to="/gallery" activeClassName="active-class" onClick={closeMenu} >Галерея</NavLink></li>
                        <li><NavLink to="/products" activeClassName="active-class" onClick={closeMenu} >Продукція</NavLink></li>
                    </ul>
                )
            }}
        </ProductConsumer>
      
    )
  }
}
