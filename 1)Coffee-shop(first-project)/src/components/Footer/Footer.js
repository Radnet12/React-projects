import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../img/decorations/logo-footer.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <NavLink to = "/">
                            <img src={logo} alt="Логотип" />
                        </NavLink>
                    </div>
                    <nav>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <NavLink to="/catalog">
                                    Наш кофе
                                </NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/pleasure">
                                    Для вашего удовольствия
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
export default Footer;