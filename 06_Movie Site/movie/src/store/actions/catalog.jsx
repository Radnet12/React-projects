import { api } from "../../api/api";
import { GET_MOVIE } from "./actionTypes";

export const getMovie = (movie) => {
    return {
        type: GET_MOVIE,
        movie
    }
};
export const loadMovie = (format, id) => {
    return async (dispatch) => {
        const result = await api.getMovie(format, id);
        dispatch(getMovie(result));
    };
};