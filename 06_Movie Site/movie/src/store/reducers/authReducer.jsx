import { SET_NEW_SESSION, LOGOUT } from "../actions/actionTypes";

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