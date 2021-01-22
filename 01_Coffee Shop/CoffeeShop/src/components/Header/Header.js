import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/decorations/logo.svg';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="Логотип"/>
                        </Link>
                    </div>
                    <nav>
                        <ul className="header__list">
                            <li className="header__item">
                                <Link to="/catalog" >
                                    Наш кофе
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/pleasure">
                                    Для вашего удовольствия
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;