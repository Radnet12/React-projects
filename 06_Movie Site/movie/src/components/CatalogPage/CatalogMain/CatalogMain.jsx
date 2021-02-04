import React from "react";
import s from "./CatalogMain.module.scss";
import { Container } from "../../UI/Container/Container";
import { Link } from "react-router-dom";

export const CatalogMain = ({ movie, format }) => {
    const getCorrectDate = (date) => {
        if (date !== undefined) {
            return date.split("-").reverse().join(".");
        }
    };
    const capitalizeFirstLetter = (name) => {
        return name.charAt(0).toUpperCase() + name.substring(1);
    };
    const defineRuntime = (runtime) => {
        if (runtime !== undefined) {
            const hours = Math.floor(runtime / 60);
            const mins = runtime - hours * 60;
            if (hours === 0) {
                return `${runtime}м`;
            } else {
                return `${hours}ч ${mins}м`;
            }
        }
    };
    const defineStatus = (status) => {
        if (status === "Released") {
            return (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 415.869 415.869"
                    >
                        <g fill="#4dcfe0">
                            <path d="M125.91 170.841c-5.747-6.269-15.673-6.792-21.943-1.045-6.269 5.747-6.792 15.673-1.045 21.943l78.89 85.682c3.135 3.135 6.792 5.224 10.971 5.224h.522c4.18 0 8.359-1.567 10.971-4.702L403.853 78.89c6.269-6.269 6.269-16.196 0-21.943-6.269-6.269-16.196-6.269-21.943 0L193.829 244.506l-67.919-73.665z" />
                            <path d="M400.196 192.261c-8.882 0-15.673 6.792-15.673 15.673 0 97.175-79.412 176.588-176.588 176.588S31.347 305.11 31.347 207.935 110.759 31.347 207.935 31.347c8.882 0 15.673-6.792 15.673-15.673S216.816 0 207.935 0C93.518 0 0 93.518 0 207.935S93.518 415.87 207.935 415.87 415.87 322.352 415.87 207.935c-.001-8.882-6.792-15.674-15.674-15.674z" />
                        </g>
                    </svg>
                    <div className={s.movie__action_tooltip}>Выпущен</div>
                </>
            );
        } else if (status === "Returning Series") {
            return (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        viewBox="0 0 384 384"
                    >
                        <path
                            d="M331.912 17.336c-8.832 0-16 7.168-16 16v13.336C281.544 16.704 237.712 0 191 0 85.68 0 0 85.992 0 191.68c0 8.832 7.168 16 16 16s16-7.168 16-16C32 103.632 103.328 32 191 32c38.456 0 74.584 13.616 103.064 38.072H279.4c-8.832 0-16 7.168-16 16s7.168 16 16 16h52.512c8.832 0 16-7.168 16-16V33.336c0-8.832-7.168-16-16-16zM368 176.32c-8.832 0-16 7.168-16 16C352 280.368 280.672 352 193 352c-38.008 0-73.752-13.28-102.072-37.2h15.368c8.832 0 16-7.168 16-16s-7.168-16-16-16h-52.52c-.144 0-.272.04-.408.04-.608.016-1.208.096-1.816.184-.448.064-.896.104-1.336.208-.528.12-1.048.312-1.568.488-.48.168-.968.312-1.432.52-.44.2-.856.456-1.28.696-.504.288-1 .568-1.472.904-.12.088-.256.136-.376.232-.272.208-.48.464-.736.688-.424.368-.848.736-1.232 1.152-.36.384-.672.784-.984 1.192-.312.408-.616.816-.896 1.248-.28.448-.52.912-.752 1.376-.232.456-.448.92-.632 1.4-.184.496-.328.992-.464 1.504-.128.488-.264.976-.344 1.48-.096.568-.136 1.136-.176 1.712-.024.328-.096.648-.096.984v52.736c0 8.832 7.168 16 16 16s16-7.168 16-16v-12.72C103.88 367.856 147.056 384 193 384c105.32 0 191-85.992 191-191.68 0-8.832-7.168-16-16-16z"
                            fill="#4dcfe0"
                            data-original="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                        />
                    </svg>
                    <div className={s.movie__action_tooltip}>Выпускается</div>
                </>
            );
        } else if (status === "Ended") {
            return (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        viewBox="0 0 24 24"
                    >
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M21.5 24h-19A2.503 2.503 0 010 21.5v-19C0 1.121 1.122 0 2.5 0h19C22.878 0 24 1.121 24 2.5v19c0 1.379-1.122 2.5-2.5 2.5zM2.5 1C1.673 1 1 1.673 1 2.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z"
                            fill="#4dcfe0"
                            data-original="#000000"
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M14.5 16a.5.5 0 01-.434-.252L11 10.383V15.5a.5.5 0 01-1 0v-7a.499.499 0 01.934-.248L14 13.617V8.5a.5.5 0 011 0v7a.499.499 0 01-.5.5zM8.5 12.5h-4a.5.5 0 010-1h4a.5.5 0 010 1z"
                            fill="#4dcfe0"
                            data-original="#000000"
                        />
                        <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="M8.5 16h-2A2.503 2.503 0 014 13.5v-3C4 9.121 5.122 8 6.5 8h2a.5.5 0 010 1h-2C5.673 9 5 9.673 5 10.5v3c0 .827.673 1.5 1.5 1.5h2a.5.5 0 010 1zM18.5 16h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2c1.378 0 2.5 1.121 2.5 2.5v3c0 1.379-1.122 2.5-2.5 2.5zM17 15h1.5c.827 0 1.5-.673 1.5-1.5v-3c0-.827-.673-1.5-1.5-1.5H17z"
                            fill="#4dcfe0"
                            data-original="#000000"
                        />
                    </svg>
                    <div className={s.movie__action_tooltip}>Закончен</div>
                </>
            );
        } else if (status === "Canceled") {
            return (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        viewBox="0 0 475.2 475.2"
                    >
                        <g fill="#4dcfe0" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M405.6 69.6C360.7 24.7 301.1 0 237.6 0s-123.1 24.7-168 69.6S0 174.1 0 237.6s24.7 123.1 69.6 168 104.5 69.6 168 69.6 123.1-24.7 168-69.6 69.6-104.5 69.6-168-24.7-123.1-69.6-168zm-19.1 316.9c-39.8 39.8-92.7 61.7-148.9 61.7s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7 0-297.8C128.5 48.9 181.4 27 237.6 27s109.1 21.9 148.9 61.7c82.1 82.1 82.1 215.7 0 297.8z"
                                data-original="#000000"
                            />
                            <path
                                d="M342.3 132.9c-5.3-5.3-13.8-5.3-19.1 0l-85.6 85.6-85.6-85.6c-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1l85.6 85.6-85.6 85.6c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.6-85.6 85.6 85.6c2.6 2.6 6.1 4 9.5 4 3.5 0 6.9-1.3 9.5-4 5.3-5.3 5.3-13.8 0-19.1l-85.4-85.6 85.6-85.6c5.3-5.3 5.3-13.8 0-19.1z"
                                data-original="#000000"
                            />
                        </g>
                    </svg>
                    <div className={s.movie__action_tooltip}>Отменён</div>
                </>
            );
        } else {
            return (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        viewBox="0 0 477 477.056"
                    >
                        <g fill="#4dcfe0">
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M298.363 204.61a40.001 40.001 0 0013.664-30.106v-25.48c8.836 0 16-7.165 16-16v-16c0-8.837-7.164-16-16-16h-176c-8.836 0-16 7.163-16 16v16c0 8.835 7.164 16 16 16v25.48a40.001 40.001 0 0013.664 30.105l50.336 44.047v8.735l-50.336 44.05a39.987 39.987 0 00-13.664 30.102v25.48c-8.836 0-16 7.165-16 16v16c0 8.836 7.164 16 16 16h176c8.836 0 16-7.164 16-16v-16c0-8.835-7.164-16-16-16v-25.48a39.987 39.987 0 00-13.664-30.102l-50.336-44.05v-8.735zm-162.336-87.587h176v16h-176zm16 32h144v25.48a23.943 23.943 0 01-4.933 14.52h-134.13a23.921 23.921 0 01-4.937-14.52zm160 240h-176v-16h176zm-74.535-119.582l50.336 44.047a24.007 24.007 0 018.2 18.055v25.48h-144v-25.48a24.007 24.007 0 018.199-18.055l50.335-44.047a15.995 15.995 0 005.465-12.05v-8.735a15.98 15.98 0 00-5.465-12.047l-36.093-31.586h99.16L237.53 236.61a16 16 0 00-5.504 12.047v8.735c0 4.617 1.993 9.007 5.465 12.05zm0 0"
                                data-original="#000000"
                            />
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M216.027 277.023h16v16h-16zm0 0M216.027 309.023h16v16h-16zm0 0"
                                data-original="#000000"
                            />
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M432.027 253.023c.02 112.563-89.507 204.715-202.023 207.95S22.816 377.348 16.37 264.969C9.921 152.594 94.043 55.477 206.188 45.824l-19.145 22.817 12.258 10.28 30.855-36.8c2.84-3.387 2.403-8.434-.984-11.273L192.372 0l-10.255 12.297 21.11 17.726C82.738 41.262-7.043 146.164.46 266.945c7.5 120.782 109.578 213.766 230.531 210.004 120.953-3.762 217.055-102.914 217.035-223.926zm0 0M419.11 180.688l15.007-5.543c-1.898-5.137-4-10.29-6.336-15.329l-14.554 6.657a205.73 205.73 0 015.882 14.214zm0 0M326.547 53.824c-4.942-2.543-10-4.914-15.008-7.039l-6.262 14.719a213.39 213.39 0 0113.957 6.55zm0 0"
                                data-original="#000000"
                            />
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M431.676 240.777l16-.937a215.686 215.686 0 00-1.602-16.504l-15.863 2.113a220.053 220.053 0 011.465 15.328zm0 0M427.621 210.273l15.664-3.28a226.26 226.26 0 00-4-16.098l-15.379 4.425a204.816 204.816 0 013.715 14.953zm0 0M389.5 126.96l12.71-9.702a218.943 218.943 0 00-10.534-12.801l-12 10.621c3.426 3.817 6.754 7.817 9.824 11.883zm0 0M406.309 152.734L420.316 145a235.726 235.726 0 00-8.535-14.207l-13.402 8.742a202.417 202.417 0 017.93 13.2zm0 0M296.027 40.848a227.701 227.701 0 00-15.902-4.743l-4 15.497A207.225 207.225 0 01290.891 56zm0 0M263.918 32.55a233.44 233.44 0 00-16.418-2.327l-1.656 15.93c5.09.519 10.215 1.245 15.242 2.152zm0 0M354.82 71.152a228.043 228.043 0 00-13.808-9.183l-8.36 13.64a198.655 198.655 0 0112.801 8.543zm0 0M380.21 92.457a219.826 219.826 0 00-12.292-11.105l-10.29 12.25a212.914 212.914 0 0111.446 10.335zm0 0"
                                data-original="#000000"
                            />
                        </g>
                    </svg>
                    <div className={s.movie__action_tooltip}>Ожидается</div>
                </>
            );
        }
    };
    return (
        <section
            className={s.movie}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}")`,
            }}
        >
            <Container>
                <div className={s.movie__wrapper}>
                    <div className={s.movie__poster}>
                        <img
                            src={
                                movie.poster_path !== null
                                    ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
                                    : "https://dummyimage.com/300x450/a6a6a6/fff.jpg&text=%D0%9D%D0%B5%D1%82+%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%B0"
                            }
                            alt={
                                movie.title ||
                                movie.original_title ||
                                movie.name ||
                                movie.original_name
                            }
                            title={
                                movie.title ||
                                movie.original_title ||
                                movie.name ||
                                movie.original_name
                            }
                            loading="lazy"
                        />
                    </div>
                    <div className={s.movie__info}>
                        <h2 className={s.movie__title}>
                            {movie.title ||
                                movie.original_title ||
                                movie.name ||
                                movie.original_name}
                        </h2>
                        <div className={s.movie__details}>
                            <div className={s.movie__detail}>
                                {getCorrectDate(movie.release_date) ||
                                    getCorrectDate(movie.first_air_date)}
                            </div>
                            <ul className={s.movie__genres_list}>
                                {movie.genres.map((genre) => {
                                    return (
                                        <li
                                            key={genre.id}
                                            className={s.movie__genre}
                                        >
                                            <Link
                                                className={s.movie__genre_link}
                                                to={`/${format}/${genre.id}`}
                                            >
                                                {capitalizeFirstLetter(
                                                    genre.name
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            {movie.runtime && (
                                <div className={s.movie__detail}>
                                    {defineRuntime(movie.runtime)}
                                </div>
                            )}
                        </div>
                        {movie.tagline && (
                            <div className={s.movie__tagline}>
                                {movie.tagline}
                            </div>
                        )}
                        <div className={s.movie__descr}>
                            <h3 className={s.movie__descr_title}>Описание</h3>
                            <p className={s.movie__descr_info}>
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                    <ul className={s.movie__actions}>
                        <li className={s.movie__action}>
                            <a
                                className={s.movie__action_link}
                                href={movie.homepage}
                                target="_blank"
                                rel="noreferrer"
                            >
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
                            {defineStatus(movie.status)}
                        </li>
                        <li className={s.movie__action}>
                            <span>{movie.vote_average.toFixed(1)}</span>
                            <div className={s.movie__action_tooltip}>
                                Рейтинг:
                                <div>{movie.vote_count} голосов</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};
