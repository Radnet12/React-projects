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


export const loadMovies = (filter) => {
    return async (dispatch) => {
        dispatch(loadingMovies());
        const list = await api.getLists("movie", filter);
        dispatch(getMovies(list));
    }
}
export const loadGenres = () => {
    return async (dispatch) => {
        const list = await api.getGenres("movie");
        dispatch(getGenres(list));
    }
}

export const loadMovieWithGenre = (id) => {
    return async (dispatch) => {
        dispatch(loadingMovies());
        const list = await api.getMovieWithGenre("movie", id);
        console.log(list);
        dispatch(getMovies(list));
    };;
};