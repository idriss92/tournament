import * as ACTIONS from  "../constants/actions"
import * as axios from 'axios'
let nextTodoId = 0;
let nexTournamentId = 0;
const ROOT_URL = "http://localhost:8081";
export function fetchTournaments() {
  const request = axios.default({
    method: 'get',
    url: `${ROOT_URL}/posts`,
    headers: []
  });

  return {
    type: ACTIONS.FETCH_TOURNAMENTS,
    payload: request
  };
}

export function fetchTournamentsSuccess(posts: any) {
  return {
    type: ACTIONS.FETCH_TOURNAMENTS_SUCCESS,
    payload: posts
  };
}

export function fetchTournamentsFailure(error: any) {
  return {
    type: ACTIONS.FETCH_TOURNAMENTS_FAILURE,
    payload: error
  };
}

export function validateTournamentFields(props: any) {
  //note: we cant have /posts/validateFields because it'll match /posts/:id path!
  const request = axios.default.post(`${ROOT_URL}/posts/validate/fields`, props);

  return {
    type: ACTIONS.VALIDATE_TOURNAMENT_FIELDS,
    payload: request
  };
}

export function validateTournamentFieldsSuccess() {
  return {
    type: ACTIONS.VALIDATE_TOURNAMENT_FIELDS_SUCCESS
  };
}

export function validateTournamentFieldsFailure(error: any) {
  return {
    type: ACTIONS.VALIDATE_TOURNAMENT_FIELDS_FAILURE,
    payload: error
  };
}

export function resetTournamentFields() {
  return {
    type: ACTIONS.RESET_TOURNAMENT_FIELDS
  }
}
;


export function createTournament(props: any, tokenFromStorage: any) {
  const request = axios.default({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/posts`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: ACTIONS.CREATE_TOURNAMENT,
    payload: request
  };
}

export function createTournamentSuccess(newPost: any) {
  return {
    type: ACTIONS.CREATE_TOURNAMENT_SUCCESS,
    payload: newPost
  };
}

export function createTournamentFailure(error: any) {
  return {
    type: ACTIONS.CREATE_TOURNAMENT_FAILURE,
    payload: error
  };
}

export function resetNewTournament() {
  return {
    type: ACTIONS.NEW_TOURNAMENT_RESET
  }
}
;

export function resetDeletedTournament() {
  return {
    type: ACTIONS.RESET_DELETED_TOURNAMENT
  }
};

export function fetchTournament(id: any) {
  const request = axios.default.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: ACTIONS.FETCH_TOURNAMENTS,
    payload: request
  };
}


export function fetchTournamentSuccess(activePost: any) {
  return {
    type: ACTIONS.FETCH_TOURNAMENTS_SUCCESS,
    payload: activePost
  };
}

export function fetchTournamentFailure(error: any) {
  return {
    type: ACTIONS.FETCH_TOURNAMENTS_SUCCESS,
    payload: error
  };
}

export function resetActiveTournament() {
  return {
    type: ACTIONS.RESET_ACTIVE_TOURNAMENT
  }
}


export function deleteTournament(id: any, tokenFromStorage: any) {
  const request = axios.default({
    method: 'delete',
    url: `${ROOT_URL}/posts/${id}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });
  return {
    type: ACTIONS.DELETE_TOURNAMENTS,
    payload: request
  };
}

export function deleteTournamentSuccess(deletedPost: any) {
  return {
    type: ACTIONS.DELETE_TOURNAMENTS_SUCCESS,
    payload: deletedPost
  };
}

export function deleteTournamentFailure(response: any) {
  return {
    type: ACTIONS.DELETE_TOURNAMENTS_FAILURE,
    payload: response
  };
}