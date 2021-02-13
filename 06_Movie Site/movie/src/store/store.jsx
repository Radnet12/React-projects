import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { catalogReducer } from "./reducers/catalogReducer";
import { headerSearchReducer } from "./reducers/headerSearchReducer";
import { mainSearchReducer } from "./reducers/mainSearchReducer";
import { moviesReducer } from "./reducers/moviesReducer";
import { authReducer } from "./reducers/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    combineReducers({
        moviesPage: moviesReducer,
        catalogPage: catalogReducer,
        headerSearch: headerSearchReducer,
        mainSearch: mainSearchReducer,
        auth: authReducer,
    }),
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);

// export const store = createStore(
//     combineReducers({
//         moviesPage: moviesReducer,
//         catalogPage: catalogReducer,
//         headerSearch: headerSearchReducer,
//         mainSearch: mainSearchReducer,
//         auth: authReducer,
//     }),
//     applyMiddleware(thunkMiddleware)
// );
