import { combineReducers } from 'redux';
import MoviesReducers from './MoviesReducers';

export default combineReducers({
    moviesResponse: MoviesReducers,
});