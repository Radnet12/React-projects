import React from "react";
import s from "./CatalogSidebar.module.scss";

export const CatalogSidebar = ({ movie }) => {
    console.log(movie);
    const defineStatus = (status) => {
        if (status === "Released") {
            return "Выпущен";
        } else if (status === "Returning Series") {
            return "Выпускается";
        } else if (status === "Ended") {
            return "Закончен"
        } else if (status === "Canceled") {
            return "Отменён"
        } else {
            return "Ожидается";
        }
    };
    const getCorrectNumber = (value) => {
        const strArray = value.toString().split("").reverse();
        const range = strArray.length / 3;
        if (Number.isInteger(range)) {
            let j = 0;
            for (let i = 1; i <= range - 1; i++) {
                strArray.splice(i * 3 + j, 0, ",");
                j++;
            }
        } else {
            let j = 0;
            for (let i = 1; i <= Math.floor(range); i++) {
                strArray.splice(i * 3 + j, 0, ",");
                j++;
            }
        }
        strArray.push("$");
        return strArray.reverse().join("");
    };
    return (
        <section className={s.sidebar}>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Оригинальное название</h3>
                <div className={s.sidebar__item_info}>
                    {movie.original_name || movie.original_title}
                </div>
            </div>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Разговорные языки</h3>
                <div className={s.sidebar__item_info}>
                    {movie.spoken_languages.map((lang) => (
                        <span
                            key={lang.english_name}
                            className={s.sidebar__item_lang}
                        >
                            {lang.english_name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={s.sidebar__item}>
                <h3 className={s.sidebar__item_title}>Статус</h3>
                <div className={s.sidebar__item_info}>
                    {defineStatus(movie.status)}
                </div>
            </div>
            {!!movie.budget && (
                <div className={s.sidebar__item}>
                    <h3 className={s.sidebar__item_title}>Бюджет</h3>
                    <div className={s.sidebar__item_info}>{getCorrectNumber(movie.budget)}</div>
                </div>
            )}
            {!!movie.revenue && (
                <div className={s.sidebar__item}>
                    <h3 className={s.sidebar__item_title}>Кассовые сборы</h3>
                    <div className={s.sidebar__item_info}>{getCorrectNumber(movie.revenue)}</div>
                </div>
            )}
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
