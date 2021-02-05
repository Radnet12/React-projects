import React from 'react';
import s from './SearchSidebar.module.scss';
import {NavLink} from 'react-router-dom';

export const SearchSidebar = () => {
    return (
        <div className={s.sidebar}>
            <h3 className={s.sidebar__title}>Результаты поиска</h3>
            <ul className={s.sidebar__list}>
                <li className={s.sidebar__item}>
                    <NavLink
                        to="/search/movie"
                        className={s.sidebar__link}
                        activeClassName={s.sidebar__link_active}
                    >
                        <span className={s.sidebar__label}>Фильмы</span>{" "}
                        <span className={s.sidebar__quantity}>20</span>
                    </NavLink>
                </li>
                <li className={s.sidebar__item}>
                    <NavLink
                        to="/search/tv"
                        className={s.sidebar__link}
                        activeClassName={s.sidebar__link_active}
                    >
                        <span className={s.sidebar__label}>Сериалы</span>{" "}
                        <span className={s.sidebar__quantity}>124</span>
                    </NavLink>
                </li>
                <li className={s.sidebar__item}>
                    <NavLink
                        to="/search/keywords"
                        className={s.sidebar__link}
                        activeClassName={s.sidebar__link_active}
                    >
                        <span className={s.sidebar__label}>Ключевые слова</span>{" "}
                        <span className={s.sidebar__quantity}>2</span>
                    </NavLink>
                </li>
                <li className={s.sidebar__item}>
                    <NavLink
                        to="/search/persons"
                        className={s.sidebar__link}
                        activeClassName={s.sidebar__link_active}
                    >
                        <span className={s.sidebar__label}>Люди</span>{" "}
                        <span className={s.sidebar__quantity}>0</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};