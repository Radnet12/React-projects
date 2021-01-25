import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { Cards } from '../UI/Cards/Cards';
import { Sidebar } from '../UI/Sidebar/Sidebar';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const getMovies = async () => {
        try {
            const list = await api.getLists("movie");
            setMovies(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetching(false);
        }
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <Sidebar />
            {isFetching === false ? <Cards movies={movies} genreFormat="movie" /> : null}
        </>
    );
};