import { api } from "../../api/api";
import { SET_NEW_SESSION, LOGOUT } from "../actions/actionTypes";

export const setNewSessionId = (sessionId) => {
    return {
        type: SET_NEW_SESSION,
        sessionId,
    };
};
export const logout = () => {
    localStorage.removeItem("sessionId");
    return {
        type: LOGOUT
    }
};
export const autoLogin = (sessionId) => {
    return (dispatch) => {
        dispatch(setNewSessionId(sessionId));
        dispatch(autoLogout(60 * 60 * 1000));
    };
};

export const autoLogout = (time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, time);
    }
};

export const requestNewToken = () => {
    return async (dispatch) => {
        dispatch(logout())
        const token = await api.getNewToken();
        localStorage.setItem("token", token);
        window.location.replace(
            `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.href}`
        );
    };
};
export const requestSessionId = (token) => {
    return async (dispatch) => {
        const sessionInfo = await api.getSessionId(token);
        console.log(sessionInfo);
        localStorage.setItem("sessionId", sessionInfo.session_id);
        dispatch(setNewSessionId(sessionInfo.session_id));
        dispatch(autoLogout(60 * 60 * 1000));
    };
};