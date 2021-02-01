import React, { useEffect, useState } from "react";
import { Container } from "../UI/Container/Container";
import s from "./CatalogPage.module.scss";

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
        <>
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
                                <div className={s.movie__detail}>
                                    19.19.2020
                                </div>
                                <ul className={s.movie__genres_list}>
                                    <li className={s.movie__genre}>
                                        <a
                                            className={s.movie__genre_link}
                                            href="#"
                                        >
                                            Триллер
                                        </a>
                                    </li>
                                    <li className={s.movie__genre}>
                                        <a
                                            className={s.movie__genre_link}
                                            href="#"
                                        >
                                            Комедия
                                        </a>
                                    </li>
                                    <li className={s.movie__genre}>
                                        <a
                                            className={s.movie__genre_link}
                                            href="#"
                                        >
                                            Фантастика
                                        </a>
                                    </li>
                                    <li className={s.movie__genre}>
                                        <a
                                            className={s.movie__genre_link}
                                            href="#"
                                        >
                                            Боевик
                                        </a>
                                    </li>
                                </ul>
                                <div className={s.movie__detail}>1h 59min</div>
                            </div>
                            <div className={s.movie__tagline}>
                                {film.tagline}
                            </div>
                            <div className={s.movie__descr}>
                                <h3 className={s.movie__descr_title}>Обзор</h3>
                                <p className={s.movie__descr_info}>
                                    {film.overview}
                                </p>
                            </div>
                        </div>
                        <ul className={s.movie__actions}>
                            <li className={s.movie__action}>
                                <a className={s.movie__action_link} href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512.001 512.001"
                                    >
                                        <path
                                            d="M476.84 35.161c-46.882-46.882-122.824-46.882-169.706 0l-92.459 92.459c-15.485 15.485-25.667 34.153-30.972 53.881-5.727 21.002-5.516 43.276.637 64.277 5.303 18.88 15.485 36.698 30.335 51.548 14.85 14.85 32.668 25.031 51.548 30.335 21.001 6.153 43.274 6.364 64.277.637 19.728-5.305 38.396-15.487 53.881-30.972l92.459-92.459c46.881-46.881 46.881-122.823 0-169.706zM341.954 254.9c-3.606 3.606-7.638 6.788-12.092 9.122-22.909 13.577-53.033 10.607-72.761-9.122s-22.698-49.852-9.122-72.761c2.333-4.454 5.516-8.486 9.122-12.092l92.459-92.459c23.334-23.334 61.519-23.334 84.853 0s23.334 61.519 0 84.853L341.954 254.9z"
                                            fill="#ff9f00"
                                        />
                                        <path
                                            d="M476.84 204.868l-92.459 92.459c-15.485 15.485-34.153 25.667-53.881 30.972-21.002 5.727-43.276 5.516-64.277-.637-18.88-5.303-36.698-15.485-51.548-30.335l42.426-42.426c19.728 19.728 49.852 22.698 72.761 9.122 4.454-2.333 8.486-5.516 12.092-9.122l92.459-92.459c23.334-23.334 23.334-61.519 0-84.853l42.426-42.426c46.882 46.881 46.882 122.823.001 169.705z"
                                            fill="#ff7816"
                                        />
                                        <path
                                            d="M299.528 382.179l-94.66 94.66c-46.882 46.882-122.824 46.882-169.706 0s-46.882-122.824 0-169.706l94.66-94.66c15.485-15.485 34.153-25.667 53.881-30.972-5.727 21.002-5.516 43.276.637 64.277-4.454 2.333-8.486 5.516-12.092 9.122l-94.66 94.66c-23.334 23.334-23.334 61.519 0 84.853s61.519 23.334 84.853 0l94.66-94.66c3.606-3.606 6.788-7.638 9.122-12.092 13.577-22.909 10.607-53.033-9.122-72.761s-22.698-49.852-9.122-72.761c18.88 5.303 36.698 15.485 51.548 30.335 14.849 14.85 25.031 32.668 30.335 51.548 6.153 21.001 6.364 43.274.637 64.277-5.304 19.727-15.486 38.395-30.971 53.88z"
                                            fill="#9ed0ff"
                                        />
                                        <path
                                            d="M299.528 382.179l-94.66 94.66c-46.882 46.882-122.824 46.882-169.706 0l42.426-42.426c23.334 23.334 61.519 23.334 84.853 0l94.66-94.66c3.606-3.606 6.788-7.638 9.122-12.092 13.577-22.909 10.607-53.033-9.122-72.761l42.426-42.426c14.849 14.85 25.031 32.668 30.335 51.548 6.153 21.001 6.364 43.274.637 64.277-5.304 19.727-15.486 38.395-30.971 53.88z"
                                            fill="#73bcff"
                                        />
                                    </svg>
                                </a>
                                <div className={s.movie__action_tooltip}>
                                    Перейти на домашнюю страницу
                                </div>
                            </li>
                            <li className={s.movie__action}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 412.735 412.735"
                                >
                                    <path
                                        d="M295.706 46.058c58.744.286 106.294 47.836 106.58 106.58 0 107.624-195.918 214.204-195.918 214.204S10.449 258.695 10.449 152.638c0-58.862 47.717-106.58 106.58-106.58a105.534 105.534 0 0189.339 48.065 106.578 106.578 0 0189.338-48.065z"
                                        fill="#d7443e"
                                    />
                                </svg>
                                <div className={s.movie__action_tooltip}>
                                    Добавить в избранное
                                </div>
                            </li>
                            <li className={s.movie__action}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 415.869 415.869"
                                >
                                    <g fill="#4dcfe0">
                                        <path d="M125.91 170.841c-5.747-6.269-15.673-6.792-21.943-1.045-6.269 5.747-6.792 15.673-1.045 21.943l78.89 85.682c3.135 3.135 6.792 5.224 10.971 5.224h.522c4.18 0 8.359-1.567 10.971-4.702L403.853 78.89c6.269-6.269 6.269-16.196 0-21.943-6.269-6.269-16.196-6.269-21.943 0L193.829 244.506l-67.919-73.665z" />
                                        <path d="M400.196 192.261c-8.882 0-15.673 6.792-15.673 15.673 0 97.175-79.412 176.588-176.588 176.588S31.347 305.11 31.347 207.935 110.759 31.347 207.935 31.347c8.882 0 15.673-6.792 15.673-15.673S216.816 0 207.935 0C93.518 0 0 93.518 0 207.935S93.518 415.87 207.935 415.87 415.87 322.352 415.87 207.935c-.001-8.882-6.792-15.674-15.674-15.674z" />
                                    </g>
                                </svg>
                                <div className={s.movie__action_tooltip}>
                                    Фильм уже выпущен
                                </div>
                            </li>
                            <li className={s.movie__action}>
                                <span>7.8</span>
                                <div className={s.movie__action_tooltip}>
                                    Рейтинг:
                                    <div>856 голосов</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
            <div className={s.bottom}>
                <Container>
                    <div className={s.bottom__wrapper}>
                        <section className={s.left}>dfdsf</section>
                        <section className={s.right}>
                            <div className={s.right__item}>
                                <h3 className={s.right__item_title}>
                                    Оригинальное название
                                </h3>
                                <div className={s.right__item_info}>
                                    Outside
                                </div>
                            </div>
                            <div className={s.right__item}>
                                <h3 className={s.right__item_title}>
                                    Язык оригинала
                                </h3>
                                <div className={s.right__item_info}>
                                    Английский
                                </div>
                            </div>
                            <div className={s.right__item}>
                                <h3 className={s.right__item_title}>Статус</h3>
                                <div className={s.right__item_info}>
                                    Выпущен
                                </div>
                            </div>
                            <div className={s.right__item}>
                                <h3 className={s.right__item_title}>Бюджет</h3>
                                <div className={s.right__item_info}>
                                    1 888 000
                                </div>
                            </div>
                            <div className={s.right__item}>
                                <h3 className={s.right__item_title}>
                                    Кассовые сборы
                                </h3>
                                <div className={s.right__item_info}>
                                    20 000 000
                                </div>
                            </div>
                            <div className={s.right__item}>
                                <h3 className={s.right__item_title}>
                                    Ключевые слова
                                </h3>
                                <ul className={s.right__item_list}>
                                    <li className={s.list__item}>Трансформатор</li>
                                    <li className={s.list__item}>Киборг</li>
                                    <li className={s.list__item}>Цветы</li>
                                    <li className={s.list__item}>Пришельцы</li>
                                    <li className={s.list__item}>Аннуетет</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </>
    );
};
