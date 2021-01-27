import { api } from "../../api/api";
import { GET_MOVIES, GET_GENRES, LOADING_MOVIES } from "./actionTypes";

export const getMovies = (movies) => {
    return {
        type: GET_MOVIES,
        movies
    }
}
export const getGenres = (genres) => {
    return {
        type: GET_GENRES,
        genres
    };
};
export const loadingMovies = () => {
    return {
        type: LOADING_MOVIES
    }
}


export const loadMovies = (format, filter) => {
    return async (dispatch) => {
        dispatch(loadingMovies());
        const list = await api.getLists(format, filter);
        dispatch(getMovies(list));
    }
}
export const loadGenres = (format) => {
    return async (dispatch) => {
        const list = await api.getGenres(format);
        dispatch(getGenres(list));
    }
}

export const loadMovieWithGenre = (format, id) => {
    return async (dispatch) => {
        dispatch(loadingMovies());
        const list = await api.getMovieWithGenre(format, id);
        dispatch(getMovies(list));
    };;
};