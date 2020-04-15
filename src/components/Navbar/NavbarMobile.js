import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {toggleMobileMenu } from '../../redux/actions';

const NavbarMobile = ({ toggleMobileMenu }) => {
    return (

        <nav className='navbar-mobile'>
            <div className="nav-logo">
                <Link to = "/"><img src="./icon_white.png" alt=""/></Link>
            </div>
            <div className="hamburger" onClick={toggleMobileMenu}>
                <i className ="fas fa-bars"/>
            </div>
        </nav>
        
    )
}

const mapDispatchToProps = dispatch => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu())
})

export default connect(null, mapDispatchToProps)(NavbarMobile);
