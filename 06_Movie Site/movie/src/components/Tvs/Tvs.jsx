import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Cards } from "../UI/Cards/Cards";
import { Sidebar } from "../UI/Sidebar/Sidebar";

export const Tvs = () => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [isFetchingMovies, setIsFetchingMovies] = useState(true);
    const [isFetchingGenres, setIsFetchingGenres] = useState(true);

    const getMovies = async () => {
        try {
            const list = await api.getLists("tv");
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
            {isFetchingGenres === false ? <Sidebar genres={genres} /> : null}
            {isFetchingMovies === false ? (
                <Cards movies={movies} genreFormat="movie" genres={genres} />
            ) : null}
        </>
    );
};
