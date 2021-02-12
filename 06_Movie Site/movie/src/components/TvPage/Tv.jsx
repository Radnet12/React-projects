import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    loadGenres,
    loadMovies,
    loadMovieWithGenre,
} from "../../store/reducers/moviesReducer";
import { Cards } from "../UI/Cards/Cards";
import { Loader } from "../UI/Loader/Loader";
import { MainTemplate } from "../UI/MainTemplate/MainTemplate";
import { Sidebar } from "../UI/Sidebar/Sidebar";

const Tv = ({
    movies,
    isFetchingGenres,
    isFetchingMovies,
    sorted,
    genres,
    format,
    currentPage,
    totalPages,
    url,
    loadGenres,
    loadMovies,
    loadMovieWithGenre,
    match: {
        params: { id, pageId },
    },
}) => {
    useEffect(() => {
        if (genres.length === 19 || genres.length === 0) {
            loadGenres(format);
        }
        if (id === undefined) {
            loadMovies(format);
        } else if (isNaN(parseInt(id))) {
            loadMovies(format, id, pageId);
        } else if (isNaN(parseInt(id)) === false) {
            loadMovieWithGenre(format, id, pageId);
        } else {
            loadMovies(format, id, pageId);
        }
    }, [id, pageId]);

    return (
        <MainTemplate>
            {isFetchingGenres === false ? (
                <Sidebar genres={genres} sort={sorted} genreFormat={format} />
            ) : (
                <Loader />
            )}
            {isFetchingMovies === false ? (
                <Cards
                    genreFormat={format}
                    movies={movies}
                    genres={genres}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    url={url}
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
        sorted: state.moviesPage.sortedTvs,
        genres: state.moviesPage.genres,
        format: state.moviesPage.format[0],
        currentPage: state.moviesPage.currentPage,
        totalPages: state.moviesPage.totalPages,
        url: state.moviesPage.url,
    };
}
export default connect(mapStateToProps, {
    loadGenres,
    loadMovies,
    loadMovieWithGenre,
})(Tv);
