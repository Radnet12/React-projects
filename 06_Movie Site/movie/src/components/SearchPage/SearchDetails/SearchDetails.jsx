import React from "react";
import s from "./SearchDetails.module.scss";
import {Link} from 'react-router-dom';
import {Pagination} from '../../UI/Pagination/Pagination';

export const SearchDetails = ({ items, format, totalPages, currentPage }) => {
    if (items === undefined) {
        return (
            <div className={s.search}>
                <p>Введите что-нибудь в поисковую строку ещё раз</p>
            </div>
        );
    } else if (items.length === 0) {
        return (
            <div className={s.search}>
                <p>К сожалению, по данному запросу нет результатов</p>
            </div>
        );
    } else {
        const getCorrectDate = (date) => {
            if (date !== undefined) {
                return date.split("-").reverse().join(".");
            }
        };

        return (
            <div className={s.search}>
                <ul className={s.search__list}>
                    {items.map((item) => {
                        return (
                            <li key={item.id} className={s.item}>
                                <div className={s.item__image}>
                                    <Link
                                        to={`/catalog/${format}/${item.id}`}
                                        className={s.item__link}
                                    >
                                        <img
                                            src={
                                                item.poster_path !== null
                                                    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                                                    : "https://dummyimage.com/275x412/a6a6a6/fff.jpg&text=%D0%9D%D0%B5%D1%82+%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%B0"
                                            }
                                            alt={
                                                item.title ||
                                                item.original_title ||
                                                item.name ||
                                                item.original_name
                                            }
                                            title={
                                                item.title ||
                                                item.original_title ||
                                                item.name ||
                                                item.original_name
                                            }
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>
                                <div className={s.item__rating}>
                                    <span>{item.vote_average.toFixed(1)}</span>
                                </div>
                                <div className={s.item__bottom}>
                                    <div className={s.item__title}>
                                        <Link
                                            to={`/catalog/${format}/${item.id}`}
                                        >
                                            {item.title ||
                                                item.original_title ||
                                                item.name ||
                                                item.original_name}
                                        </Link>
                                    </div>
                                    <div className={s.item__date}>
                                        {getCorrectDate(item.release_date) ||
                                            getCorrectDate(item.first_air_date)}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <Pagination
                    totalPages={totalPages}
                    genreFormat={`search/${format}`}
                    currentPage={currentPage}
                />
            </div>
        );
    }
};
