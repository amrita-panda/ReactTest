import {combineReducers} from 'redux';
import commentsReducer from './Comments';

export default combineReducers({
    review:commentsReducer
})