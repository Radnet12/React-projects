import { api } from "../../api/api";

const SET_PAGE_PARAMS = "react-movie/movies/SET_PAGE_PARAMS";
const GET_GENRES = "react-movie/movies/GET_GENRES";
const GET_MOVIES = "react-movie/movies/GET_MOVIES";

const initialState = {
    sortedMovies: [
        { name: "Популярное", link: "popular" },
        { name: "Сейчас смотрят", link: "now_playing" },
        { name: "Лучшее", link: "top_rated" },
        { name: "Скоро", link: "upcoming" },
    ],
    sortedTvs: [
        { name: "Популярное", link: "popular" },
        { name: "В эфире", link: "airing_today" },
        { name: "Лучшее", link: "top_rated" },
        { name: "По телевиденью", link: "on_the_air" },
    ],
    format: ["tv", "movie"],
    isFetchingMovies: true,
    isFetchingGenres: true,
    movies: [],
    genres: [],
    currentPage: "1",
    totalPages: 1,
    url: "popular"
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.movies,
                isFetchingMovies: false,
                totalPages: action.totalPages
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.genres,
                isFetchingGenres: false,
            };
        case SET_PAGE_PARAMS: {
            return {
                ...state,
                isFetchingMovies: true,
                url: action.filter,
                currentPage: action.page
            };
        }
        default:
            return state;
    }
};

export const getMovies = (movies, totalPages) => {
    return {
        type: GET_MOVIES,
        movies,
        totalPages,
    };
};
export const getGenres = (genres) => {
    return {
        type: GET_GENRES,
        genres,
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
    };
};
export const loadMovieWithGenre = (format, id = 80, page = "1") => {
    return async (dispatch) => {
        dispatch(setPageParams(id, page));
        const [list, totalPages] = await api.getMovieWithGenre(
            format,
            id,
            page
        );
        dispatch(getMovies(list, totalPages));
    };
};