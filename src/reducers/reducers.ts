// import {combineReducers} from  'redux'
// import * as ACTIONS_CONSTANTS from '../constants/actions'

// function todo(state: any, action: any){
//    switch (action.type) {	
//       case ACTIONS_CONSTANTS.ADD_TODO:
//          return {
//             id: action.id,
//             text: action.text,
//          }			
//       default:
//       return state
//    }
// }

// function todos(state: any[], action: any) {
//    switch (action.type) {
	
//       case ACTIONS_CONSTANTS.ADD_TODO:
//          return [
//             ...state,
//             todo(undefined, action)
//          ]
			
//       default:
//       return state
//    }
// }
// const todoApp = combineReducers({
//    todos
// })

// export default todoApp