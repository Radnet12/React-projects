import { api } from "../../api/api";
import {
    GET_MOVIES,
    GET_GENRES,
    LOADING_MOVIES,
    UPDATE_TEXT,
    GET_SEARCHED_MOVIES,
    ZERO_OUT_SEARCH_RESULTS,
    SET_PAGE,
    SET_TOTAL_PAGES
} from "./actionTypes";

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
export const setTotalPages = (totalPages) => {
    return {
        type: SET_TOTAL_PAGES,
        totalPages,
    };
};

export const loadMovies = (format, filter) => {
    return async (dispatch) => {
        dispatch(loadingMovies());
        const [list, totalPages] = await api.getLists(format, filter);
        dispatch(setTotalPages(totalPages));
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
export const updateText = (text) => {
    return {
        type: UPDATE_TEXT,
        text
    };
};
export const getSearchedMovies = (movies) => {
    return {
        type: GET_SEARCHED_MOVIES,
        movies
    }
}
export const getSearchResults = (text) => {
    return async (dispatch) => {
        const list = await api.searchMovies(text);
        dispatch(getSearchedMovies(list));
    };
};
export const zeroOutSearchResults = () => {
    return {
        type: ZERO_OUT_SEARCH_RESULTS
    }
}
export const setPage = (page) => {
    return {
        type: SET_PAGE,
        page
    }
};
export const changePage = (page) => {
    return (dispatch) => {
        dispatch(setPage(page));
    }
};