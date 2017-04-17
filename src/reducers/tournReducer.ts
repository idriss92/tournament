import * as types from './../actions/actionsTypes'
import {
    combineReducers
} from 'redux'


const tournament = (
    state = [],
    action
) => {
    switch (action.type) {
        case types.CREATE_TOURNAMENT_REQUEST:
            return [...state,
                // id: action.id,
                // description: action.description
                (<any>Object).assign({}, action.course)
            ];
        default:
            return state;
    }
};

const tournaments = (
    state = [],
    action
) => {
    switch (action.type) {
        case types.REQUEST_SUCCESS:
            if (action.data) return action.data;
            return state;
        case types.CREATE_TOURNAMENT_REQUEST:
            return [...state, tournament(undefined, action)];
        case types.CREATE_TOURNAMENT_FAILURE:
            return state.filter(t => t.id !== action.id);
        case types.DESTROY_TOURNAMENT:
            return state.filter(t => t.id !== action.id);
        default:
            return state;
    }
};

const newTournament = (
    state = [],
    action
) => {
    switch (action.type) {
        case types.TYPING:
            return action.newTournament;
        case types.CREATE_TOURNAMENT_REQUEST:
            return '';
        default:
            return state;
    }
};

const tournamentReducer = combineReducers({
    tournaments,
    newTournament
})

export default tournamentReducer;