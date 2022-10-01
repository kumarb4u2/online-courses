import { combineReducers } from 'redux';
import { courses } from './courses.reducers';
import { trainers } from './trainers.reducers';

export default combineReducers({ courses, trainers });
