import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux';
import user from './userReducer';
import courses from './courseReducer';
import tournament from './tournReducer';
import message from './messageReducer';
import * as types from '../actions/actionsTypes'

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isFetching,
  courses,
  tournament,
  user,
  message,
  routing : routerReducer
});

export default rootReducer;