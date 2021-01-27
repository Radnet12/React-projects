import React, { useEffect } from 'react';
import { Cards } from '../UI/Cards/Cards';
import { Sidebar } from '../UI/Sidebar/Sidebar';
import { connect, useDispatch } from 'react-redux';
import { loadGenres, loadMovies, loadMovieWithGenre } from '../../store/actions/movies';

const Movies = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies());
        dispatch(loadGenres());
    }, [dispatch]);

    return (
        <>
            {props.isFetchingGenres === false ? (
                <Sidebar
                    genres={props.genres}
                    sort={props.sorted}
                    filterMovies={(id) => dispatch(loadMovieWithGenre(id))}
                    genreFormat="movies"
                    sortMovies={(filter) => dispatch(loadMovies(filter))}
                />
            ) : null}
            {props.isFetchingMovies === false ? (
                <Cards
                    movies={props.movies}
                    genreFormat="movie"
                    genres={props.genres}
                />
            ) : null}
        </>
    );
};

function mapStateToProps(state) {
    return {
        movies: state.moviesPage.movies,
        isFetchingGenres: state.moviesPage.isFetchingGenres,
        isFetchingMovies: state.moviesPage.isFetchingMovies,
        sorted: state.moviesPage.sorted,
        genres: state.moviesPage.genres
    };
}
export default connect(mapStateToProps)(Movies);