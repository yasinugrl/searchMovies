import reducers from './index'
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default store;