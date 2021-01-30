import { GET_GENRES, GET_MOVIES, GET_SEARCHED_MOVIES, LOADING_MOVIES, SET_PAGE, SET_TOTAL_PAGES, SET_URL, UPDATE_TEXT, ZERO_OUT_SEARCH_RESULTS } from "../actions/actionTypes";

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
    searchText: "",
    currentPage: 1,
    totalPages: 1,
    url: 'popular'
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
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages
            }
        case SET_URL:
            return {
                ...state,
                url: action.url
            }
        default:
            return state;
    }
};
