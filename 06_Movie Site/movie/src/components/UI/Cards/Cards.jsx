import React from "react";
import { Pagination } from "../Pagination/Pagination";
import s from "./Cards.module.scss";

export const Cards = ({ movies, genres, changePage, genreFormat, currentPage, totalPages, url }) => {
    const getCorrectDate = (date) => {
        if (date !== undefined) {
            return date.split("-").reverse().join(".");
        }
    };
    const defineGenres = (movieGenres) => {
        let allGenres = [];
        movieGenres.forEach((movieGenre) => {
            genres.forEach((genre) => {
                if (movieGenre === genre.id) {
                    allGenres.push(genre.name);
                }
            });
        });
        return allGenres.join(", ");
    };

    return (
        <div className={s.cards}>
            <ul className={s.cards__list}>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id} className={s.item}>
                            <div className={s.item__image}>
                                <a href="#" className={s.item__link}>
                                    <img
                                        src={
                                            movie.poster_path !== null
                                                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                                                : "https://dummyimage.com/275x412/a6a6a6/fff.jpg&text=%D0%9D%D0%B5%D1%82+%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%B0"
                                        }
                                        alt={movie.title || movie.original_name}
                                        title={
                                            movie.title || movie.original_name
                                        }
                                    />
                                </a>
                            </div>
                            <div className={s.item__rating}>
                                <span>{movie.vote_average.toFixed(1)}</span>
                            </div>
                            <div className={s.item__bottom}>
                                <div className={s.item__title}>
                                    <a href="#">{movie.title || movie.name}</a>
                                </div>
                                <div className={s.item__date}>
                                    {getCorrectDate(movie.release_date) ||
                                        getCorrectDate(movie.first_air_date)}
                                </div>
                            </div>
                            <div className={s.item__hovered}>
                                <a href="#">
                                    <div className={s.item__info}>
                                        <p>
                                            Название:{" "}
                                            <span>
                                                {movie.title || movie.name}
                                            </span>
                                        </p>
                                        <p>
                                            Жанры:{" "}
                                            <span>
                                                {defineGenres(movie.genre_ids)}
                                            </span>
                                        </p>
                                        <p>
                                            Дата выхода:{" "}
                                            <span>
                                                {getCorrectDate(
                                                    movie.release_date
                                                ) ||
                                                    getCorrectDate(
                                                        movie.first_air_date
                                                    )}
                                            </span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                changePage={(format, url, page) =>
                    changePage(format, url, page)
                }
                genreFormat={genreFormat}
                url={url}
            />
        </div>
    );
};
