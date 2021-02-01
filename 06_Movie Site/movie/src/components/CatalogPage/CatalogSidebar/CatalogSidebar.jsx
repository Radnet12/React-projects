import React from 'react';
import s from './CatalogSidebar.module.scss';

export const CatalogSidebar = () => {
    return (
        <section className={s.sidebar}>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Оригинальное название</h3>
                <div className={s.sidebar__item_info}>Outside</div>
            </div>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Язык оригинала</h3>
                <div className={s.sidebar__item_info}>Английский</div>
            </div>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Статус</h3>
                <div className={s.sidebar__item_info}>Выпущен</div>
            </div>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Бюджет</h3>
                <div className={s.sidebar__item_info}>1 888 000</div>
            </div>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Кассовые сборы</h3>
                <div className={s.sidebar__item_info}>20 000 000</div>
            </div>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Ключевые слова</h3>
                <ul className={s.sidebar__item_list}>
                    <li className={s.list__item}>Трансформатор</li>
                    <li className={s.list__item}>Киборг</li>
                    <li className={s.list__item}>Цветы</li>
                    <li className={s.list__item}>Пришельцы</li>
                    <li className={s.list__item}>Аннуетет</li>
                </ul>
            </div>
        </section>
    );
};