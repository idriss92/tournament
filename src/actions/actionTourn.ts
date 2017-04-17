/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from '../actions/actionsTypes';

polyfill();

export function makeTournamentRequest(method, id, data, api = '/tournament'){
    return request[method](api + (id ? ('/' + id) : ''), data);
}

export function destroy(id){
    return { type: types.DESTROY_TOURNAMENT, id}
}

// export function imtyping(text){
//     console.log('tournament '+ text);
//     return {
//         type: types.TYPING,
//         newTournament: text
//     };
// }

export function createTournamentRequest(data){
    return{
        type: types.CREATE_TOURNAMENT_REQUEST,
        id: data.id,
        players: data.players,
        description: data.description
    };
}

export function createTournamentSuccess(){
    return{
        type: types.CREATE_TOURNAMENT_SUCCESS
    };
}

export function createTournamentFailure(data){
    return {
        type: types.CREATE_TOURNAMENT_FAILURE,
        id: data.id,
        error: data.error
    };
}

export function handleClearForm(){}
export function handleFormSubmit(){}
export function handleDescriptionChange(){
}
export function handlePlayersRange(){}

export function createTournamentDuplicate(){
    return {
        type: types.CREATE_TOURNAMENT_DUPLICATE
    };
}

/**
 * 
 * @param data     id: String,
    description: String,
    count: {type: Number, min: 0},
    players: {type: Number, min: 0},
    date: {type: Date, default: Date.UTC}
 */

export function createTournament(data){
    return (dispatch, getState) =>{
        if(data.description.trim().length <= 0) return;
        
        const id = md5.hash(data.description);

        const {tournament} = getState();
        const finalData = {
            count: 1,
            id,
            players: data.players,
            description: data.description
        }

        if(tournament.tournaments.filter(tournamentItem => tournamentItem.id === id).length > 0){
            return dispatch(createTournamentDuplicate());
        }

        dispatch(createTournamentRequest(finalData));

        return makeTournamentRequest('post', id, finalData)
            .then(res => {
                if(res.status === 200){
                    return dispatch(createTournamentSuccess());
                }
            })
            .catch(() => {
                return dispatch(createTournamentFailure({
                    id,
                    error: 'Something went wrong and we couldn\'t create your tournament'
                }))
            });
    };
}

export function destroyTournament(id){
    return dispatch => {
        return makeTournamentRequest('delete', id,{})
            .then(() => dispatch(destroy(id)))
            .catch(() => dispatch(createTournamentFailure({id,
                error: 'Something went wrong and we couldn\'t add your tournament'})));
    };
}