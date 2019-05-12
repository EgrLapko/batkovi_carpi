import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {ProductConsumer} from '../../context/context';

export default class Sidebar extends Component {
  render() {
    return (
        <ProductConsumer>
            {value => {
                const {openMenu} = value;
                return (
                    <ul className={"slidemenu " + (openMenu ? "slide-visible" : null)}>
                        <li><NavLink exact to="/" activeClassName="active-class" >Головна</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active-class">Про нас</NavLink></li>
                        <li><NavLink to="/gallery" activeClassName="active-class">Галерея</NavLink></li>
                        <li><NavLink to="/products" activeClassName="active-class">Продукція</NavLink></li>
                    </ul>
                )
            }}
        </ProductConsumer>
      
    )
  }
}
