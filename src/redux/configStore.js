import {combineReducers, createStore} from 'redux';
import { movieReducer } from './reducer/movieReducer';
import { chairReducer } from './reducer/chairReducer';
const rootReducer = combineReducers({
    movieReducer,
    chairReducer
})
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());