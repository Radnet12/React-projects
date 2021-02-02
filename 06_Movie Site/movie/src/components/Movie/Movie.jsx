import React, { useEffect } from 'react';
import { Cards } from '../UI/Cards/Cards';
import { Sidebar } from '../UI/Sidebar/Sidebar';
import { connect } from 'react-redux';
import { changePage, loadGenres, loadMovies, loadMovieWithGenre, resetPage } from '../../store/actions/movies';
import { Loader } from '../UI/Loader/Loader';
import { MainTemplate } from '../UI/MainTemplate/MainTemplate';


const Movie = (props) => {
    console.log(props);
    useEffect(() => {
        console.log("renderEffect");
        props.loadMovies();
        props.loadGenres();
    }, []);
    useEffect(() => {
        console.log("propsEffect");
        debugger
        props.loadMovieWithGenre("movie", props.match.params.id, props.match.params.pageId);
    }, [props.match.params.id, props.match.params.pageId]);



    return (
        <MainTemplate>
            {props.isFetchingGenres === false ? (
                <Sidebar
                    genres={props.genres}
                    sort={props.sorted}
                    filterMovies={ (id) => props.loadMovieWithGenre(props.format, id)}
                    genreFormat={props.format}
                    sortMovies={(filter) =>
                        props.loadMovies(props.format, filter)
                    }
                    resetPage={(url) => props.resetPage(url)}
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
                        props.changePage(format, url, page)
                    }
                    currentPage={props.currentPage}
                    totalPages={props.totalPages}
                    url={props.url}
                />
            ) : (
                <Loader />
            )}
        </MainTemplate>
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
export default connect(mapStateToProps, { changePage, loadGenres, loadMovies, loadMovieWithGenre, resetPage })(Movie);