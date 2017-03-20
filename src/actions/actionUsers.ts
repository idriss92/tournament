// import axios from 'axios';
// import * as ACTIONS from  "../constants/actions"

// export function validateEmail(validateEmailToken) {
//   //check if token from welcome email is valid, if so, update email as verified and login the user from response
//   const request = axios.get(`${ACTIONS.ROOT_URL}/validateEmail/${validateEmailToken}`);

//   return {
//     type: ACTIONS.VALIDATE_EMAIL,
//     payload: request
//   };
// }

// export function validateEmailSuccess(currentUser) {
//   return {
//     type: ACTIONS.VALIDATE_EMAIL_SUCCESS,
//     payload: currentUser
//   };
// }

// export function validateEmailFailure(error) {
//   return {
//     type: ACTIONS.VALIDATE_EMAIL_FAILURE,
//     payload: error
//   };
// }

// export function meFromToken(tokenFromStorage) {
//   //check if the token is still valid, if so, get me from the server

//   const request = axios({
//     method: 'get',
//     url: `${ACTIONS.ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
//     headers: {
//       'Authorization': `Bearer ${tokenFromStorage}`
//     }
//   });

//   return {
//     type: ACTIONS.ME_FROM_TOKEN,
//     payload: request
//   };
// }

// export function meFromTokenSuccess(currentUser) {
//   return {
//     type: ACTIONS.ME_FROM_TOKEN_SUCCESS,
//     payload: currentUser
//   };
// }

// export function meFromTokenFailure(error) {
//   return {
//     type: ACTIONS.ME_FROM_TOKEN_FAILURE,
//     payload: error
//   };
// }


// export function resetToken() {//used for logout
//   return {
//     type: ACTIONS.RESET_TOKEN
//   };
// }


// export function signUpUser(formValues) {
//   const request = axios.post(`${ACTIONS.ROOT_URL}/users/signup`, formValues);

//   return {
//     type: ACTIONS.SIGNUP_USER,
//     payload: request
//   };
// }

// export function signUpUserSuccess(user) {
//   return {
//     type: ACTIONS.SIGNUP_USER_SUCCESS,
//     payload: user
//   };
// }

// export function signUpUserFailure(error) {
//   return {
//     type: ACTIONS.SIGNUP_USER_FAILURE,
//     payload: error
//   };
// }


// export function resetUser() {
//   return {
//     type: ACTIONS.RESET_USER,
//   };
// }

// export function signInUser(formValues) {
//   const request = axios.post(`${ACTIONS.ROOT_URL}/users/signin`, formValues);

//   return {
//     type: ACTIONS.SIGNIN_USER,
//     payload: request
//   };
// }

// export function signInUserSuccess(user) {
//   return {
//     type: ACTIONS.SIGNIN_USER_SUCCESS,
//     payload: user
//   };
// }

// export function signInUserFailure(error) {
//   return {
//     type: ACTIONS.SIGNIN_USER_FAILURE,
//     payload: error
//   };
// }

// export function logoutUser() {
//   return {
//     type: ACTIONS.LOGOUT_USER
//   };
// }
// export function updateUserEmail(email) {
//   return {
//     type: ACTIONS.UPDATE_USER_EMAIL,
//     payload:email
//   };
// }

// export function validateUserFields(values) {
//   //note: we cant have /users/validateFields because it'll match /users/:id path!
//   const request = axios.post(`${ACTIONS.ROOT_URL}/users/validate/fields`, values);

//   return {
//     type: ACTIONS.VALIDATE_USER_FIELDS,
//     payload: request
//   };
// }

// export function validateUserFieldsSuccess() {
//   return {
//     type: ACTIONS.VALIDATE_USER_FIELDS_SUCCESS
//   };
// }

// export function validateUserFieldsFailure(error) {
//   return {
//     type: ACTIONS.VALIDATE_USER_FIELDS_FAILURE,
//     payload: error
//   };
// }

// export function resetValidateUserFields() {
//   return {
//     type: ACTIONS.RESET_VALIDATE_USER_FIELDS
//   }
// };

import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';

import * as types from '../actions/actionsTypes';

polyfill();

const getMessage = res => res.response && res.response.data && res.response.data.message;

function makeUserRequest(method, data, api = '/login') {
  return request[method](api, data);
}


// Log In Action Creators
export function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

export function loginSuccess(message) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    message
  };
}

export function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message
  };
}

// Sign Up Action Creators
export function signUpError(message) {
  return {
    type: types.SIGNUP_ERROR_USER,
    message
  };
}

export function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

export function signUpSuccess(message) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    message
  };
}

// Log Out Action Creators
export function beginLogout() {
  return { type: types.LOGOUT_USER};
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER };
}

export function logoutError() {
  return { type: types.LOGOUT_ERROR_USER };
}

export function toggleLoginMode() {
  return { type: types.TOGGLE_LOGIN_MODE };
}

export function manualLogin(data) {
  return dispatch => {
    dispatch(beginLogin());

    return makeUserRequest('post', data, '/login')
      .then(response => {
        if (response.status === 200) {
          dispatch(loginSuccess(response.data.message));
          dispatch(push('/'));
        } else {
          dispatch(loginError('Oops! Something went wrong!'));
        }
      })
      .catch(err => {
        dispatch(loginError(getMessage(err)));
      });
  };
}

export function signUp(data) {
  return dispatch => {
    dispatch(beginSignUp());

    return makeUserRequest('post', data, '/signup')
      .then(response => {
        if (response.status === 200) {
          dispatch(signUpSuccess(response.data.message));
          dispatch(push('/'));
        } else {
          dispatch(signUpError('Oops! Something went wrong'));
        }
      })
      .catch(err => {
        dispatch(signUpError(getMessage(err)));
      });
  };
}

export function logOut() {
  return dispatch => {
    dispatch(beginLogout());

    return makeUserRequest('post', null, '/logout')
      .then(response => {
        if (response.status === 200) {
          dispatch(logoutSuccess());
        } else {
          dispatch(logoutError());
        }
      });
  };
}
