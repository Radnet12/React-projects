import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Cards } from "../UI/Cards/Cards";
import { Sidebar } from "../UI/Sidebar/Sidebar";

export const Tvs = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [isFetchingGenres, setIsFetchingGenres] = useState(true);
    const sortTvs = [
        { name: "Популярное", link: "popular" },
        { name: "В эфире", link: "airing_today" },
        { name: "Лучшее", link: "top_rated" },
        { name: "По телевиденью", link: "on_the_air" },
    ];

    const getMovies = async (filter) => {
        try {
            const list = await api.getLists("tv", filter);
            setMovies(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetchingMovies(false);
        }
    };

    const getMoviesWithGenre = async (id) => {
        try {
            setIsFetchingMovies(true);
            const list = await api.getMovieWithGenre("tv", id);
            setMovies(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetchingMovies(false);
        }
    };

    const getGenreList = async () => {
        try {
            const list = await api.getGenres("tv");
            setGenres(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetchingGenres(false);
        }
    };

    useEffect(() => {
        getMovies();
        getGenreList();
    }, []);

    return (
        <>
            {isFetchingGenres === false ? (
                <Sidebar
                    genres={genres}
                    sort={sortTvs}
                    filterMovies={getMoviesWithGenre}
                    genreFormat="tvs"
                    sortMovies={getMovies}
                />
            ) : null}
            {isFetchingMovies === false ? (
                <Cards movies={movies} genreFormat="movie" genres={genres} />
            ) : null}
        </>
    );
};
