import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer';
import { moviesReducer } from './moviesReducer';

export default combineReducers({
    moviesPage: moviesReducer,
    catalogPage: catalogReducer
})