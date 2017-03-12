import axios from 'axios';
import * as ACTIONS from  "../constants/actions"

export function validateEmail(validateEmailToken) {
  //check if token from welcome email is valid, if so, update email as verified and login the user from response
  const request = axios.get(`${ACTIONS.ROOT_URL}/validateEmail/${validateEmailToken}`);

  return {
    type: ACTIONS.VALIDATE_EMAIL,
    payload: request
  };
}

export function validateEmailSuccess(currentUser) {
  return {
    type: ACTIONS.VALIDATE_EMAIL_SUCCESS,
    payload: currentUser
  };
}

export function validateEmailFailure(error) {
  return {
    type: ACTIONS.VALIDATE_EMAIL_FAILURE,
    payload: error
  };
}

export function meFromToken(tokenFromStorage) {
  //check if the token is still valid, if so, get me from the server

  const request = axios({
    method: 'get',
    url: `${ACTIONS.ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: ACTIONS.ME_FROM_TOKEN,
    payload: request
  };
}

export function meFromTokenSuccess(currentUser) {
  return {
    type: ACTIONS.ME_FROM_TOKEN_SUCCESS,
    payload: currentUser
  };
}

export function meFromTokenFailure(error) {
  return {
    type: ACTIONS.ME_FROM_TOKEN_FAILURE,
    payload: error
  };
}


export function resetToken() {//used for logout
  return {
    type: ACTIONS.RESET_TOKEN
  };
}


export function signUpUser(formValues) {
  const request = axios.post(`${ACTIONS.ROOT_URL}/users/signup`, formValues);

  return {
    type: ACTIONS.SIGNUP_USER,
    payload: request
  };
}

export function signUpUserSuccess(user) {
  return {
    type: ACTIONS.SIGNUP_USER_SUCCESS,
    payload: user
  };
}

export function signUpUserFailure(error) {
  return {
    type: ACTIONS.SIGNUP_USER_FAILURE,
    payload: error
  };
}


export function resetUser() {
  return {
    type: ACTIONS.RESET_USER,
  };
}

export function signInUser(formValues) {
  const request = axios.post(`${ACTIONS.ROOT_URL}/users/signin`, formValues);

  return {
    type: ACTIONS.SIGNIN_USER,
    payload: request
  };
}

export function signInUserSuccess(user) {
  return {
    type: ACTIONS.SIGNIN_USER_SUCCESS,
    payload: user
  };
}

export function signInUserFailure(error) {
  return {
    type: ACTIONS.SIGNIN_USER_FAILURE,
    payload: error
  };
}

export function logoutUser() {
  return {
    type: ACTIONS.LOGOUT_USER
  };
}
export function updateUserEmail(email) {
  return {
    type: ACTIONS.UPDATE_USER_EMAIL,
    payload:email
  };
}
