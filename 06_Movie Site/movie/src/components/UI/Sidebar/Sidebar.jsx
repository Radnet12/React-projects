import React, { useState } from "react";
import s from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ genres, sort, filterMovies, genreFormat, sortMovies, resetPage }) => {
    const [isFilterClosed, setIsFilterClosed] = useState(false);

    const capitalizeFirstLetter = (name) => {
        return name.charAt(0).toUpperCase() + name.substring(1);
    };

    return (
        <div
            className={`${s.sidebar} ${isFilterClosed ? s.sidebar_close : ""}`}
        >
            <h2
                className={s.sidebar__title}
                onClick={() => setIsFilterClosed((prevState) => !prevState)}
            >
                Фильтры
            </h2>
            <div className={s.sidebar__item}>
                <div className={s.sidebar__main}>
                    <h3 className={s.sidebar__subtitle}>Жанр</h3>
                    <ul className={s.sidebar__list}>
                        {genres.map((genre) => {
                            return (
                                <li
                                    key={genre.id}
                                    className={s.sidebar__list_item}
                                >
                                    <NavLink
                                        activeClassName={s.sidebar__link_active}
                                        className={s.sidebar__link}
                                        to={`/${genreFormat}/${genre.id}`}
                                        onClick={() => {
                                            filterMovies(genre.id);
                                            resetPage(genre.id);
                                        }}
                                    >
                                        {capitalizeFirstLetter(genre.name)}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={s.sidebar__item}>
                <div className={s.sidebar__main}>
                    <h3 className={s.sidebar__subtitle}>Отсортируйте</h3>
                    <ul className={s.sidebar__list}>
                        {sort.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={s.sidebar__list_item}
                                >
                                    <NavLink
                                        activeClassName={s.sidebar__link_active}
                                        className={s.sidebar__link}
                                        to={`/${genreFormat}/${item.link}`}
                                        onClick={() => {
                                            sortMovies(item.link);
                                            resetPage(item.link);
                                        }}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
