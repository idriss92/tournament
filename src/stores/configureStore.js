import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

if (process.env.NODE_ENV === 'production' || (location && location.hostname !== 'localhost')) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}

// export default function configureStore(initialState){
//   return createStore(
//     rootReducer,
//     initialState
//     // ,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     // ,
//     // applyMiddleware(reduxImmutableStateInvariant())
//   )
// }