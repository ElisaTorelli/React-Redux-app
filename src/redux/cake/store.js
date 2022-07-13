import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../rootReducer'
// import default logger (after having installed it)
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store

