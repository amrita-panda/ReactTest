import {combineReducers} from 'redux';
import commentsReducer from './Comments';
import sucessReducer from './successReducer';

export default combineReducers({
    review:commentsReducer,
    success:sucessReducer
})

