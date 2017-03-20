import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux';
import user from './userReducer';
import courses from './courseReducer';
import tournament from './tournReducer';
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
  routing : routerReducer
});
// import TournamentReducer from './tournament.reducer';
// //import UserReducer from './reducer_user';
// import ValidateUserFieldsReducer from './validate.reducer';
// //import ResendEmailReducer from './reducer_resendEmail';
// //import UpdateEmailReducer from './reducer_updateEmail';
// import { reducer as formReducer } from 'redux-form';

// const rootReducer = combineReducers({
// //  user: UserReducer,
//   validateFields: ValidateUserFieldsReducer,
//   tournaments: TournamentReducer, //<-- Posts
//   form: formReducer, // <-- redux-form
// //  resendEmail: ResendEmailReducer,
// //  updateEmail: UpdateEmailReducer
// });

export default rootReducer;