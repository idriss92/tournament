import { combineReducers } from 'redux';
import courses from './courseReducer'

const rootReducer = combineReducers({
  courses
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