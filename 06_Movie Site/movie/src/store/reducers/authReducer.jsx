import { api } from "../../api/api";

const SET_NEW_SESSION = "react-movie/auth/SET_NEW_SESSION";
const LOGOUT = "react-movie/auth/LOGOUT";

const initialState = {
    sessionId: null,
    isAuth: false,
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_SESSION: {
            return {
                ...state,
                token: action.token,
                isAuth: true
            };
        }
        case LOGOUT: {
            return {
                isAuth: false
            }
        }
        default: {
            return state;
        }
    }
}

export const setNewSessionId = (sessionId) => {
    return {
        type: SET_NEW_SESSION,
        sessionId,
    };
};
export const logout = () => {
    localStorage.removeItem("sessionId");
    return {
        type: LOGOUT,
    };
};

export const requestNewToken = () => {
    return async (dispatch) => {
        dispatch(logout());
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
        localStorage.setItem("sessionId", sessionInfo.session_id);
        dispatch(setNewSessionId(sessionInfo.session_id));
        dispatch(autoLogout(60 * 60 * 1000));
    };
};
export const autoLogin = (sessionId) => {
    return (dispatch) => {
        dispatch(setNewSessionId(sessionId));
        dispatch(autoLogout(60 * 60 * 1000));
    };
};
export const autoLogout = (time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logout());
        }, time);
    };
};