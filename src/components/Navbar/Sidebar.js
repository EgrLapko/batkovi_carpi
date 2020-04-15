import React from 'react';

import { connect } from 'react-redux';
import { toggleMobileMenu, setENG, setUKR } from '../../redux/actions';

import { NavLink } from 'react-router-dom';
import { english, ukrainian } from '../../language';

const Sidebar = ({ isMobileMenuOpen, toggleMobileMenu, langENG, langUKR, setENG, setUKR }) => {
    return (
        <ul className={"slidemenu " + (isMobileMenuOpen ? "slide-visible" : null)}>
            <li className="slidemenu__item"><NavLink exact to="/" activeClassName="active-class" onClick={toggleMobileMenu} >{langENG ? english.nav1 : ukrainian.nav1 }</NavLink></li>
            <li className="slidemenu__item"><NavLink to="/about" activeClassName="active-class" onClick={toggleMobileMenu} >{langENG ? english.nav2 : ukrainian.nav2 }</NavLink></li>
            <li className="slidemenu__item"><NavLink to="/gallery" activeClassName="active-class" onClick={toggleMobileMenu} >{langENG ? english.nav3 : ukrainian.nav3 }</NavLink></li>
            <li className="slidemenu__item"><NavLink to="/products" activeClassName="active-class" onClick={toggleMobileMenu} >{langENG ? english.nav4 : ukrainian.nav4 }</NavLink></li>
            <div className="langs">
                <button className={"btn lang-btn " + (langUKR ? "active-lang-btn" : null)} onClick={setUKR}>UKR</button>
                <button className={"btn lang-btn " + (langENG ? "active-lang-btn" : null)} onClick={setENG}>ENG</button>
            </div>
        </ul>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    setUKR: () => dispatch(setUKR()),
    setENG: () => dispatch(setENG())
})

const mapStateToProps = state => ({
    isMobileMenuOpen: state.app.isMobileMenuOpen,
    langENG: state.app.eng,
    langUKR: state.app.ukr
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
