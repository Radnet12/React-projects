import React, { Component } from 'react';
import './drawer.css';
import BackDrop from '../../UI/backDrop/backDrop';
import {NavLink} from 'react-router-dom';

class Drawer extends Component {
    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName='active'
                        onClick={() => {this.props.onClose()}}
                    >{link.label}</NavLink>
                </li>
            )
        });
    }
    render() {
        const cls = ['drawer'];
        if (!this.props.isOpen) {
            cls.push('close');
        }

        const links = [
            {to: '/', label: 'Список', exact: true}
        ];

        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Создание теста', exact: false})
            links.push({to: '/logout', label: 'Выйти', exact: false})
        } else {
            links.push({to: '/auth', label: 'Авторизация', exact: false})
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </>
        )
    }
}
export default Drawer;