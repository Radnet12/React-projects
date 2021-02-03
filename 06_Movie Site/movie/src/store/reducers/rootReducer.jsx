import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer';
import { moviesReducer } from './moviesReducer';
import { searchReducer } from './searchReducer';

export default combineReducers({
    moviesPage: moviesReducer,
    catalogPage: catalogReducer,
    search: searchReducer
})