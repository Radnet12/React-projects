import React, { useEffect } from 'react';
import { Cards } from '../UI/Cards/Cards';
import { Sidebar } from '../UI/Sidebar/Sidebar';
import { connect, useDispatch } from 'react-redux';
import { changePage, loadGenres, loadMovies, loadMovieWithGenre, resetPage } from '../../store/actions/movies';
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
                    resetPage={(url) => dispatch(resetPage(url))}
                />
            ) : (
                <Loader />
            )}
            {props.isFetchingMovies === false ? (
                <Cards
                    genreFormat={props.format}
                    movies={props.movies}
                    genres={props.genres}
                    changePage={(format, url, page) =>
                        dispatch(changePage(format, url, page))
                    }
                    currentPage={props.currentPage}
                    totalPages={props.totalPages}
                    url={props.url}
                />
            ) : (
                <Loader />
            )}
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
        totalPages: state.moviesPage.totalPages,
        url: state.moviesPage.url
    };
}
export default connect(mapStateToProps)(Movie);