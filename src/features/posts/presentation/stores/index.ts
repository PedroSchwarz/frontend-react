import { createStore, combineReducers } from 'redux';
import { pagesReducer } from './Pages';
import { postsReducer } from './Posts';

const rootReducers = combineReducers({
    pages: pagesReducer,
    posts: postsReducer
});

const store = createStore(rootReducers);

export default store;