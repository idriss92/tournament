import * as types from './actionsTypes'

export function dismissMessage(){
    return { type: types.DISMISS_MESSAGE};
}

export default { dismissMessage };