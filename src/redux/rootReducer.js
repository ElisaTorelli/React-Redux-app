// in this file I combine all the reducers & export 1 reducer that can be passed to the createStore function
import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import muffinReducer from './muffin/muffinReducer'
import useReducer from './user/userReducer'

// define root reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    muffin: muffinReducer,
    user: useReducer
})

export default rootReducer