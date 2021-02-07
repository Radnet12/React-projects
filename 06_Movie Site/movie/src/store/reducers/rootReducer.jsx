import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer';
import { moviesReducer } from './moviesReducer';
import { headerSearchReducer } from "./headerSearchReducer";
import { mainSearchReducer } from './mainSearchReducer';

export default combineReducers({
    moviesPage: moviesReducer,
    catalogPage: catalogReducer,
    headerSearch: headerSearchReducer,
    mainSearch: mainSearchReducer
})