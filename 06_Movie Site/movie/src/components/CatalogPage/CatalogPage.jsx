import React, { useEffect, useState } from 'react';
import { Container } from '../UI/Container/Container';
import s from './CatalogPage.module.scss';

export const CatalogPage = () => {
    const [film, setFilm] = useState([]);
    console.log(film);
    useEffect(() => {
        fetch(
            // "https://api.themoviedb.org/3/configuration?api_key=5daf90e431960f20b1aca24657c54316"
            "https://api.themoviedb.org/3/movie/775996?api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU"
            // "https://api.themoviedb.org/3/movie/775996/credits?api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU"
        )
            .then((response) => response.json())
            .then((data) => setFilm(data));
    }, []);
    return (
        <section
            className={s.movie}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${film.backdrop_path}")`,
            }}
        >
            <Container>
                <div className={s.movie__wrapper}>
                    <div className={s.movie__poster}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
                            alt=""
                            title=""
                            loading="lazy"
                        />
                    </div>
                    <div className={s.movie__info}>
                        <h2 className={s.movie__title}>Смертельная зона</h2>
                        <div className={s.movie__details}>
                            <div className={s.movie__detail}>19.19.2020</div>
                            <ul className={s.movie__genres_list}>
                                <li className={s.movie__genre}>
                                    <a className={s.movie__genre_link} href="#">
                                        Триллер
                                    </a>
                                </li>
                                <li className={s.movie__genre}>
                                    <a className={s.movie__genre_link} href="#">
                                        Комедия
                                    </a>
                                </li>
                                <li className={s.movie__genre}>
                                    <a className={s.movie__genre_link} href="#">
                                        Фантастика
                                    </a>
                                </li>
                                <li className={s.movie__genre}>
                                    <a className={s.movie__genre_link} href="#">
                                        Боевик
                                    </a>
                                </li>
                            </ul>
                            <div className={s.movie__detail}>1h 59min</div>
                        </div>
                        <div className={s.movie__tagline}>{film.tagline}</div>
                        <div className={s.movie__descr}>
                            <h3 className={s.movie__descr_title}>Обзор</h3>
                            <p className={s.movie__descr_info}>
                                {film.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};