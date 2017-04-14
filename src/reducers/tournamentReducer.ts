// import * as ACTIONS_CONSTANTS from '../constants/actions'


// const INITIAL_STATE = {
//     tournamentsList: {tournaments: [], error : null, loading: false},
// 	newTournament:{tournament:null, error: null, loading: false}, 
// 	activeTournament:{tournament:null, error:null, loading: false}, 
// 	deletedTournament: {tournament: null, error:null, loading: false},
// };

// export default function(state = INITIAL_STATE, action: any) {
//   let error;
//   switch(action.type) {

//   case ACTIONS_CONSTANTS.FETCH_TOURNAMENTS:// start fetching posts and set loading = true
//   	return { ...state, postsList: {posts:[], error: null, loading: true} }; 
//   case ACTIONS_CONSTANTS.FETCH_TOURNAMENTS_SUCCESS:// return list of posts and make loading = false
//     return { ...state, postsList: {posts: action.payload, error:null, loading: false} };
//   case ACTIONS_CONSTANTS.FETCH_TOURNAMENTS_FAILURE:// return error and make loading = false
//     error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
//     return { ...state, postsList: {posts: [], error: error, loading: false} };
// //   case ACTIONS_CONSTANTS.RESET_POSTS:// reset postList to initial state
// //     return { ...state, postsList: {posts: [], error:null, loading: false} };

//   case ACTIONS_CONSTANTS.FETCH_TOURNAMENTS:
//     return { ...state, activeTournament:{...state.activeTournament, loading: true}};
//   case ACTIONS_CONSTANTS.FETCH_TOURNAMENTS_SUCCESS:
//     return { ...state, activeTournament: {post: action.payload, error:null, loading: false}};
//   case ACTIONS_CONSTANTS.FETCH_TOURNAMENTS_FAILURE:
//     error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
//     return { ...state, activeTournament: {post: null, error:error, loading:false}};
//   case ACTIONS_CONSTANTS.RESET_ACTIVE_TOURNAMENT:
//     return { ...state, activeTournament: {post: null, error:null, loading: false}};

//   case ACTIONS_CONSTANTS.CREATE_TOURNAMENT:
//   	return {...state, newTournament: {...state.newTournament, loading: true}}
//   case ACTIONS_CONSTANTS.CREATE_TOURNAMENT_SUCCESS:
//   	return {...state, newTournament: {post:action.payload, error:null, loading: false}}
//   case ACTIONS_CONSTANTS.CREATE_TOURNAMENT_FAILURE:
//     error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
//   	return {...state, newTournament: {post:null, error:error, loading: false}}
//   case ACTIONS_CONSTANTS.NEW_TOURNAMENT_RESET:
//   	return {...state,  newTournament:{post:null, error:null, loading: false}}


//   case ACTIONS_CONSTANTS.DELETE_TOURNAMENTS:
//    	return {...state, deletedTournament: {...state.deletedTournament, loading: true}}
//   case ACTIONS_CONSTANTS.DELETE_TOURNAMENTS_SUCCESS:
//   	return {...state, deletedTournament: {post:action.payload, error:null, loading: false}}
//   case ACTIONS_CONSTANTS.DELETE_TOURNAMENTS_FAILURE:
//     error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
//   	return {...state, deletedTournament: {post:null, error:error, loading: false}}
//   case ACTIONS_CONSTANTS.RESET_DELETED_TOURNAMENT:
//   	return {...state,  deletedTournament:{post:null, error:null, loading: false}}

//   case ACTIONS_CONSTANTS.VALIDATE_TOURNAMENT_FIELDS:
//     return {...state, newTournament:{...state.newTournament, error: null, loading: true}}
//   case ACTIONS_CONSTANTS.VALIDATE_TOURNAMENT_FIELDS_SUCCESS:
//     return {...state, newTournament:{...state.newTournament, error: null, loading: false}}
//   case ACTIONS_CONSTANTS.VALIDATE_TOURNAMENT_FIELDS_FAILURE:
//     let result = action.payload;
//     if(!result) {
//       error = {message: action.payload.message};
//     } else {
//       error = {title: result.title, categories: result.categories, description: result.description};
//     }
//     return {...state, newTournament:{...state.newTournament, error: error, loading: false}}
//   case ACTIONS_CONSTANTS.RESET_TOURNAMENT_FIELDS:
//     return {...state, newTournament:{...state.newTournament, error: null, loading: null}}
//   default:
//     return state;
//   }
// }