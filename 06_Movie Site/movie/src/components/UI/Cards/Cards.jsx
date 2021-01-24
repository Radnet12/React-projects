import React, { useEffect, useState } from "react";
import { api } from "../../../api/api";
import s from "./Cards.module.scss";

export const Cards = ({ movies }) => {
    const [genres, setGenres] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const getGenreList = async () => {
        try {
            const list = await api.getGenres("tv");
            setGenres(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetching(false);
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
        })
        return allGenres.join(', ');
    }
    useEffect(() => getGenreList(), []);
    return (
        <div className={s.cards}>
            <ul className={s.cards__list}>
                {isFetching === false && movies.map((movie) => {
                    return (
                        <li key={movie.id} className={s.item}>
                            <div className={s.item__image}>
                                <a href="#" className={s.item__link}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                        alt={movie.title}
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
                                    {movie.release_date || movie.first_air_date}
                                </div>
                            </div>
                            <div className={s.item__hovered}>
                                <div className={s.item__info}>
                                    <p>
                                        Название:{" "}
                                        <span>{movie.title || movie.name}</span>
                                    </p>
                                    <p>
                                        Жанры: <span>{defineGenres(movie.genre_ids)}</span>
                                    </p>
                                    <p>
                                        Дата выхода:{" "}
                                        <span>
                                            {movie.release_date ||
                                                movie.first_air_date}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
