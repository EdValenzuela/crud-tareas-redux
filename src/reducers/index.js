import { combineReducers } from 'redux';
import dataReducer from './taskReducer';

export default combineReducers({
    tasks: dataReducer
})