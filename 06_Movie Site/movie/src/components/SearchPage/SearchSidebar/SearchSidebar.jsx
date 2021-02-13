import React from 'react';
import s from './SearchSidebar.module.scss';
import {NavLink} from 'react-router-dom';

export const SearchSidebar = () => {
    return (
        <section className={s.sidebar}>
            <h3 className={s.sidebar__title}>Результаты поиска</h3>
            <ul className={s.sidebar__list}>
                <li className={s.sidebar__item}>
                    <NavLink
                        to="/search/movie"
                        className={s.sidebar__link}
                        activeClassName={s.sidebar__link_active}
                    >
                        <span className={s.sidebar__label}>Фильмы</span>
                    </NavLink>
                </li>
                <li className={s.sidebar__item}>
                    <NavLink
                        to="/search/tv"
                        className={s.sidebar__link}
                        activeClassName={s.sidebar__link_active}
                    >
                        <span className={s.sidebar__label}>Сериалы</span>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
};
export const MemoizedSearchSidebar = React.memo(SearchSidebar);