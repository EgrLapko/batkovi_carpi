import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductConsumer } from '../../context/context';
import { english, ukrainian } from '../../language';
import NavbarMobile from './NavbarMobile';

export const Navbar = () => {
  return (
    <ProductConsumer>
        {value => {
          const {eng, ukr, setUKR, setENG} = value;
          return (
            <React.Fragment>
              <nav className="navbar">
                <ul className="navbar__links">
                  <li className="link"><NavLink exact to="/" activeClassName="active-class"> {eng ? english.nav1 : ukrainian.nav1 }</NavLink></li>
                  <li className="link"><NavLink to="/about" activeClassName="active-class">{eng ? english.nav2 : ukrainian.nav2 }</NavLink></li>
                  <li className="link"><NavLink to="/gallery" activeClassName="active-class">{eng ? english.nav3 : ukrainian.nav3 }</NavLink></li>
                  <li className="link"><NavLink to="/products" activeClassName="active-class">{eng ? english.nav4 : ukrainian.nav4 }</NavLink></li>
                </ul>
                <div className="navbar__langs">
                  <button className={"btn lang-btn " + (ukr ? "active-lang-btn" : null)} onClick={setUKR}>UKR</button>
                  <button className={"btn lang-btn " + (eng ? "active-lang-btn" : null)} onClick={setENG}>ENG</button>
                </div>
              </nav>

              <NavbarMobile />
            </React.Fragment>        
          )
        }}
      </ProductConsumer>
  )
}

export default Navbar;