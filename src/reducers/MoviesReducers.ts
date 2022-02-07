import {
    GET_MOVIES_START,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILD,
    SET_FAVORITES
} from '../actions/types';
import Storage from '../utils/Storage';

const INITIAL_STATE = {
    loading: false,
    movies: [],
    favorites: [],
};
export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_MOVIES_START:
            return { ...state, loading: true };
        case GET_MOVIES_SUCCESS:
            return { ...state, loading: false, movies: action.payload, };

        case GET_MOVIES_FAILD:
            return { ...state, loading: false, };

        case SET_FAVORITES:
            return { ...state, favorites: action.payload, };
        default:
            return state;
    }
};

