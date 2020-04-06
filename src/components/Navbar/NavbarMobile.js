import React from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../../context/context';

const NavbarMobile = () => {
    return (
        <ProductConsumer>
            {value => {
                const { handleMenu } = value;
                return (
                    <nav className='navbar-mobile'>
                        <div className="nav-logo">
                            <Link to = "/"><img src="./icon_white.png" alt=""/></Link>
                        </div>
                        <div className="hamburger" onClick={handleMenu}>
                            <i className ="fas fa-bars"/>
                        </div>
                    </nav>
                )
            }}
        </ProductConsumer>
        
    )
}

export default NavbarMobile;
