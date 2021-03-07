import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import TitleReducers from './reducers/Index';

export default createStore(TitleReducers, applyMiddleware(thunk))