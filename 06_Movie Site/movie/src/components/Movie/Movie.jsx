import React, { useEffect } from 'react';
import { Cards } from '../UI/Cards/Cards';
import { Sidebar } from '../UI/Sidebar/Sidebar';
import { connect, useDispatch } from 'react-redux';
import { changePage, loadGenres, loadMovies, loadMovieWithGenre } from '../../store/actions/movies';
import { Loader } from '../UI/Loader/Loader';


const Movie = (props) => {
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
                    filterMovies={(id) =>
                        dispatch(loadMovieWithGenre(props.format, id))
                    }
                    genreFormat={props.format}
                    sortMovies={(filter) =>
                        dispatch(loadMovies(props.format, filter))
                    }
                />
            ) : <Loader />}
            {props.isFetchingMovies === false ? (
                <Cards
                    genreFormat={props.format}
                    movies={props.movies}
                    genres={props.genres}
                    changePage={(page) => dispatch(changePage(page))}
                    currentPage={props.currentPage}
                    totalPages={props.totalPages}
                />
            ) : <Loader />}
        </>
    );
};

function mapStateToProps(state) {
    return {
        movies: state.moviesPage.movies,
        isFetchingGenres: state.moviesPage.isFetchingGenres,
        isFetchingMovies: state.moviesPage.isFetchingMovies,
        sorted: state.moviesPage.sortedMovies,
        genres: state.moviesPage.genres,
        format: state.moviesPage.format[1],
        currentPage: state.moviesPage.currentPage,
        totalPages: state.moviesPage.totalPages
    };
}
export default connect(mapStateToProps)(Movie);