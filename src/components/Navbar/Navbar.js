import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {ProductConsumer} from '../../context/context';
import { english, ukrainian } from '../../language';

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {handleMenu, ukr, eng, setUKR, setENG} = value;
          return (
            <React.Fragment>
                <ul className = 'navbar'>
                  <li><NavLink exact to="/" activeClassName="active-class"> {eng ? english.nav1 : ukrainian.nav1 } </NavLink></li>
                  <li><NavLink to="/about" activeClassName="active-class">{eng ? english.nav2 : ukrainian.nav2 }</NavLink></li>
                  <li><NavLink to="/gallery" activeClassName="active-class">{eng ? english.nav3 : ukrainian.nav3 }</NavLink></li>
                  <li><NavLink to="/products" activeClassName="active-class">{eng ? english.nav4 : ukrainian.nav4 }</NavLink></li>
                  <div className="lang-section">
                    <button className="btn lang-btn" onClick={setUKR}>UA</button>
                    <button className="btn lang-btn" onClick={setENG}>ENG</button>
                  </div>
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
