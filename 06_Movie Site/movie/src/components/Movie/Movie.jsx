import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    loadGenres,
    loadMovies,
    loadMovieWithGenre,
} from "../../store/actions/movies";
import { Cards } from "../UI/Cards/Cards";
import { Loader } from "../UI/Loader/Loader";
import { MainTemplate } from "../UI/MainTemplate/MainTemplate";
import { Sidebar } from "../UI/Sidebar/Sidebar";

const Movie = (props) => {
    useEffect(() => {
        if (props.genres.length === 16 || props.genres.length === 0) {props.loadGenres(props.format);}
        if (props.match.params.id === undefined) {
            props.loadMovies(props.format);
        } else if (isNaN(parseInt(props.match.params.id))) {
            props.loadMovies(
                props.format,
                props.match.params.id,
                props.match.params.pageId
            );
        } else if (isNaN(parseInt(props.match.params.id)) === false) {
            props.loadMovieWithGenre(
                props.format,
                props.match.params.id,
                props.match.params.pageId
            );
        } else {
            props.loadMovies(
                props.format,
                props.match.params.id,
                props.match.params.pageId
            );
        }
    }, [props.match.params.id, props.match.params.pageId]);

    return (
        <MainTemplate>
            {props.isFetchingGenres === false ? (
                <Sidebar
                    genres={props.genres}
                    sort={props.sorted}
                    genreFormat={props.format}
                />
            ) : (
                <Loader />
            )}
            {props.isFetchingMovies === false ? (
                <Cards
                    genreFormat={props.format}
                    movies={props.movies}
                    genres={props.genres}
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
        url: state.moviesPage.url,
    };
}
export default connect(mapStateToProps, {
    loadGenres,
    loadMovies,
    loadMovieWithGenre,
})(Movie);
