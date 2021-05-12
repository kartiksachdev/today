import {combineReducers} from 'redux';
import characterReducer from './characterReducer.js';

const allReducers = combineReducers({
    characters: characterReducer
})

export default allReducers;