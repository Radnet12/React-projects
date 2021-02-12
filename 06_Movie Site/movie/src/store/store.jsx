import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import { catalogReducer } from "./reducers/catalogReducer";
import { headerSearchReducer } from "./reducers/headerSearchReducer";
import { mainSearchReducer } from "./reducers/mainSearchReducer";
import { moviesReducer } from "./reducers/moviesReducer";
import { authReducer } from './reducers/authReducer';


export const store = createStore(
    combineReducers({
        moviesPage: moviesReducer,
        catalogPage: catalogReducer,
        headerSearch: headerSearchReducer,
        mainSearch: mainSearchReducer,
        auth: authReducer,
    }),
    applyMiddleware(thunkMiddleware)
);