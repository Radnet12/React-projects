import React from "react";
import s from "./Cards.module.scss";

export const Cards = ({ movies, genres }) => {
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
                                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                        alt={movie.title || movie.original_name}
                                    />
                                </a>
                            </div>
                            <div className={s.item__rating}>
                                <span>{movie.vote_average.toFixed(1)}</span>
                            </div>
                            <div className={s.item__bottom}>
                                <div className={s.item__title}>
                                    <a href="#">
                                        {movie.title || movie.name}
                                    </a>
                                </div>
                                <div className={s.item__date}>
                                    {getCorrectDate(movie.release_date) || getCorrectDate(movie.first_air_date)}
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
                                            {getCorrectDate(movie.release_date) || getCorrectDate(movie.first_air_date)}
                                        </span>
                                    </p>
                                </div>
                                </a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
