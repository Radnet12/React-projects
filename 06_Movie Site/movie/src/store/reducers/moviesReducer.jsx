import { GET_GENRES, GET_MOVIES, GET_SEARCHED_MOVIES, LOADING_MOVIES, UPDATE_TEXT, ZERO_OUT_SEARCH_RESULTS } from "../actions/actionTypes";

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
    searchedMovies: [],
    searchText: ""
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
                isFetchingMovies: true,
            };
        case UPDATE_TEXT:
            return {
                ...state,
                searchText: action.text,
            };
        case GET_SEARCHED_MOVIES:
            return {
                ...state,
                searchedMovies: action.movies
            };
        case ZERO_OUT_SEARCH_RESULTS:
            return {
                ...state,
                searchedMovies: []
            };
        default:
            return state;
    }
};
