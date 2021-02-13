import { api } from "../../api/api";

const GET_MOVIE_INFO = "react-movie/catalog/GET_MOVIE_INFO";
const LOADING_MOVIE = "react-movie/catalog/LOADING_MOVIE";

const initialState = {
    movie: [],
    credits: [],
    reviews: [],
    keywords: [],
    recommend: [],
    isFetchingMovie: true
};
export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_INFO: {
            return {
                ...state,
                movie: action.movie,
                credits: action.credits,
                reviews: action.reviews,
                keywords: action.keywords,
                recommend: action.recommend,
                isFetchingMovie: false,
            };
        }
        case LOADING_MOVIE: {
            return {
                ...state,
                isFetchingMovie: true,
            };
        }
        default:
            return state;
    }
};

export const getMovieInfo = (movie, credits, reviews, keywords, recommend) => {
    return {
        type: GET_MOVIE_INFO,
        movie,
        credits,
        reviews,
        keywords,
        recommend,
    };
};
export const loadingMovieInfo = () => {
    return {
        type: LOADING_MOVIE,
    };
};

export const loadMovieInfo = (format, id) => {
    return async (dispatch) => {
        dispatch(loadingMovieInfo());
        const movie = await api.getMovie(format, id);
        const credits = await api.getCredits(format, id);
        const reviews = await api.getAnotherMovieInfo(format, id, "reviews");
        const keywords = await api.getAnotherMovieInfo(format, id, "keywords");
        const recommend = await api.getAnotherMovieInfo(
            format,
            id,
            "recommendations",
            "&language=ru-RU"
        );
        dispatch(getMovieInfo(movie, credits, reviews, keywords, recommend));
    };
};