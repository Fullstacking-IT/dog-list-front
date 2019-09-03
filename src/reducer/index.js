import { combineReducers } from 'redux';
import dogs from './dogReducer';
import create from './createReducer';

export default combineReducers({ dogs, create });
