import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {ProductConsumer} from '../../context/context';
import { english, ukrainian } from '../../language';

export default class Sidebar extends Component {
  render() {
    return (
        <ProductConsumer>
            {value => {
                const {openMenu, closeMenu, eng} = value;
                return (
                    <ul className={"slidemenu " + (openMenu ? "slide-visible" : null)}>
                        <li><NavLink exact to="/" activeClassName="active-class" onClick={closeMenu} >{eng ? english.nav1 : ukrainian.nav1 }</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active-class" onClick={closeMenu} >{eng ? english.nav2 : ukrainian.nav2 }</NavLink></li>
                        <li><NavLink to="/gallery" activeClassName="active-class" onClick={closeMenu} >{eng ? english.nav3 : ukrainian.nav3 }</NavLink></li>
                        <li><NavLink to="/products" activeClassName="active-class" onClick={closeMenu} >{eng ? english.nav4 : ukrainian.nav4 }</NavLink></li>
                    </ul>
                )
            }}
        </ProductConsumer>
      
    )
  }
}
