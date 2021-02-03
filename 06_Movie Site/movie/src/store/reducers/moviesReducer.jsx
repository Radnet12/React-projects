import {SET_PAGE_PARAMS, GET_GENRES, GET_MOVIES} from "../actions/actionTypes";

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
    currentPage: 1,
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
