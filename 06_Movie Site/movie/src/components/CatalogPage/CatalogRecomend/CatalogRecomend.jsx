import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import s from './CatalogRecomend.module.scss';

export const CatalogRecomend = ({ movies, format }) => {
    return (
        <section className={s.recom}>
            <h3 className={s.recom__title}>Рекомендации</h3>
            <Swiper
                wrapperTag="ul"
                spaceBetween={30}
                slidesPerView="auto"
            >
                {movies.map((movie) => (
                    <SwiperSlide
                        key={movie.id}
                        tag="li"
                        className={s.recom__slide}
                    >
                        <Link to={`/catalog/${format}/${movie.id}`}>
                            <div className={s.recom__poster}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
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
                                />
                            </div>
                            <div className={s.recom__movie_title}>
                                {movie.title ||
                                    movie.original_title ||
                                    movie.name ||
                                    movie.original_name}
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};