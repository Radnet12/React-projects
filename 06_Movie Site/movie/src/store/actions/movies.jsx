import { api } from "../../api/api";
import {
    GET_MOVIES,
    GET_GENRES,
    SET_PAGE_PARAMS,
} from "./actionTypes";

export const getMovies = (movies, totalPages) => {
    return {
        type: GET_MOVIES,
        movies,
        totalPages,
    };
}
export const getGenres = (genres) => {
    return {
        type: GET_GENRES,
        genres
    };
};
export const setPageParams = (filter, page) => {
    return {
        type: SET_PAGE_PARAMS,
        filter,
        page,
    };
};
export const loadMovies = (format, filter = "popular", page = "1") => {
    return async (dispatch) => {
        dispatch(setPageParams(filter, page));
        const [list, totalPages] = await api.getMovies(format, filter, page);
        dispatch(getMovies(list, totalPages));
    };
};
export const loadGenres = (format) => {
    return async (dispatch) => {
        const list = await api.getGenres(format);
        dispatch(getGenres(list));
    }
}
export const loadMovieWithGenre = (format, id = 80, page = "1") => {
    return async (dispatch) => {
        dispatch(setPageParams(id, page));
        const [list, totalPages] = await api.getMovieWithGenre(format, id, page);
        dispatch(getMovies(list, totalPages));
    };;
};