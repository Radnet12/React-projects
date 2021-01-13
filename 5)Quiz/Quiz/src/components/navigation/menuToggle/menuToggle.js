import React, { Component } from 'react';
import './menuToggle.css';

const menuToggle = props => {
    const cls = [
        'menu__toggle',
        'fa'
    ];
    if (props.isOpen) {
        cls.push('fa-times');
        cls.push('open');
    } else {
        cls.push('fa-bars');
    }
    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
};
export default menuToggle;