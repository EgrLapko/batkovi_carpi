import React from 'react';
import { connect } from 'react-redux'

import { setENG, setUKR } from '../../redux/actions';

import { NavLink } from 'react-router-dom';
import { english, ukrainian } from '../../language';
import NavbarMobile from './NavbarMobile';


export const Navbar = ({ setENG, setUKR, langENG, langUKR}) => {
  return (
    <React.Fragment>

      <nav className="navbar">
        <ul className="navbar__links">
          <li className="link"><NavLink exact to="/" activeClassName="active-class"> {langENG ? english.nav1 : ukrainian.nav1 }</NavLink></li>
          <li className="link"><NavLink to="/about" activeClassName="active-class">{langENG ? english.nav2 : ukrainian.nav2 }</NavLink></li>
          <li className="link"><NavLink to="/gallery" activeClassName="active-class">{langENG ? english.nav3 : ukrainian.nav3 }</NavLink></li>
          <li className="link"><NavLink to="/products" activeClassName="active-class">{langENG ? english.nav4 : ukrainian.nav4 }</NavLink></li>
        </ul>
        <div className="navbar__langs">
          <button className={"btn lang-btn " + (langUKR ? "active-lang-btn" : null)} onClick={setUKR}>UKR</button>
          <button className={"btn lang-btn " + (langENG ? "active-lang-btn" : null)} onClick={setENG}>ENG</button>
        </div>
      </nav>
      <NavbarMobile />
      
    </React.Fragment>        
  )
}

const mapStateToProps = (state) => ({
    langENG: state.app.eng,
    langUKR: state.app.ukr
})

const mapDispatchToProps = dispatch => ({
  setUKR: () => dispatch(setUKR()),
  setENG: () => dispatch(setENG()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);