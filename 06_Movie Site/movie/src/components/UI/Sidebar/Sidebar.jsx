import React from "react";
import s from "./Sidebar.module.scss";

export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <h2 className={s.sidebar__title}>Фильтры</h2>
            <div className={s.sidebar__item}>
                <div className={s.sidebar__main}>
                    <h3 className={s.sidebar__subtitle}>Жанр</h3>
                    <ul className={s.sidebar__list}>
                        <li className={s.sidebar__list_item}>
                            <a href="#">Боевик</a>
                        </li>
                        <li className={s.sidebar__list_item}>
                            <a href="#">Триллер</a>
                        </li>
                        <li className={s.sidebar__list_item}>
                            <a href="#">Комедия</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.sidebar__item}>
                <div className={s.sidebar__main}>
                    <h3 className={s.sidebar__subtitle}>Отсортируйте</h3>
                    <ul className={s.sidebar__list}>
                        <li className={s.sidebar__list_item}>
                            <a href="#">Последнее</a>
                        </li>
                        <li className={s.sidebar__list_item}>
                            <a href="#">Сейчас смотрят</a>
                        </li>
                        <li className={s.sidebar__list_item}>
                            <a href="#">Популярное</a>
                        </li>
                        <li className={s.sidebar__list_item}>
                            <a href="#">Лучшее</a>
                        </li>
                        <li className={s.sidebar__list_item}>
                            <a href="#">Ожидаемые</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
