import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { Cards } from '../UI/Cards/Cards';
import { Sidebar } from '../UI/Sidebar/Sidebar';

export const Movies = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [isFetchingGenres, setIsFetchingGenres] = useState(true);
    const sortMovie = [
        { name: "Популярное", link: "popular" },
        { name: "Сейчас смотрят", link: "now_playing" },
        { name: "Лучшее", link: "top_rated" },
        { name: "Скоро", link: "upcoming" },
    ];

    const getMovies = async (filter) => {
        try {
            setIsFetchingMovies(true);
            const list = await api.getLists("movie", filter);
            setMovies(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetchingMovies(false);
        }
    };

    const getGenreList = async () => {
        try {
            setIsFetchingGenres(true);
            const list = await api.getGenres("movie");
            setGenres(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetchingGenres(false);
        }
    };

    const getMoviesWithGenre = async (id) => {
        try {
            setIsFetchingMovies(true);
            const list = await api.getMovieWithGenre("movie", id);
            setMovies(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetchingMovies(false);
        }
    }

    useEffect(() => {
        getMovies();
        getGenreList();
    }, []);

    return (
        <>
            {isFetchingGenres === false ? (
                <Sidebar
                    genres={genres}
                    sort={sortMovie}
                    filterMovies={getMoviesWithGenre}
                    genreFormat="movies"
                    sortMovies={getMovies}
                />
            ) : null}
            {isFetchingMovies === false ? (
                <Cards movies={movies} genreFormat="movie" genres={genres} />
            ) : null}
        </>
    );
};