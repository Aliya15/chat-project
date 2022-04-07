import { combineReducers } from 'redux';
import {inputReducer} from "./inputReducer";
import {messagesReducer} from './messagesReducer';

export const rootReducer = combineReducers({
 inputReducer,
 messagesReducer
});
