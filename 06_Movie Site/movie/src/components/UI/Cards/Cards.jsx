import React from 'react';
import s from './Cards.module.scss';

export const Cards = () => {
    return (
        <div className={s.cards}>
            <ul className={s.cards__list}>
                <li className={s.item}>
                    <a className={s.item__link}>
                        <div className={s.item__image}>
                            <img src="" alt=""/>
                        </div>
                        <div className={s.item__title}>
                            Бойцовский клуб
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
};