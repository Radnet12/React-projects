import { GET_GENRES, GET_MOVIES, LOADING_MOVIES } from "../actions/actionTypes";

const initialState = {
    sorted: [
        { name: "Популярное", link: "popular" },
        { name: "Сейчас смотрят", link: "now_playing" },
        { name: "Лучшее", link: "top_rated" },
        { name: "Скоро", link: "upcoming" },
    ],
    isFetchingMovies: true,
    isFetchingGenres: true,
    movies: [],
    genres: [],
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.movies,
                isFetchingMovies: false,
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.genres,
                isFetchingGenres: false,
            };
        case LOADING_MOVIES:
            return {
                ...state,
                isFetchingMovies: true
            };
        default:
            return state;
    }
};
