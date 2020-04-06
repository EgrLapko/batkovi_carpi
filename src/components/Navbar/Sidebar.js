import React from 'react';
import {NavLink} from 'react-router-dom';
import {ProductConsumer} from '../../context/context';
import { english, ukrainian } from '../../language';

const Sidebar = () => {
    return (
        <ProductConsumer>
            {value => {
                const {openMenu, closeMenu, eng, ukr, setUKR, setENG} = value;
                return (
                    <ul className={"slidemenu " + (openMenu ? "slide-visible" : null)}>
                        <li className="slidemenu__item"><NavLink exact to="/" activeClassName="active-class" onClick={closeMenu} >{eng ? english.nav1 : ukrainian.nav1 }</NavLink></li>
                        <li className="slidemenu__item"><NavLink to="/about" activeClassName="active-class" onClick={closeMenu} >{eng ? english.nav2 : ukrainian.nav2 }</NavLink></li>
                        <li className="slidemenu__item"><NavLink to="/gallery" activeClassName="active-class" onClick={closeMenu} >{eng ? english.nav3 : ukrainian.nav3 }</NavLink></li>
                        <li className="slidemenu__item"><NavLink to="/products" activeClassName="active-class" onClick={closeMenu} >{eng ? english.nav4 : ukrainian.nav4 }</NavLink></li>
                        <div className="langs">
                            <button className={"btn lang-btn " + (ukr ? "active-lang-btn" : null)} onClick={setUKR}>UKR</button>
                            <button className={"btn lang-btn " + (eng ? "active-lang-btn" : null)} onClick={setENG}>ENG</button>
                        </div>
                    </ul>
                )
            }}
        </ProductConsumer>
    )
}

export default Sidebar;
