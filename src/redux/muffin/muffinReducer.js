import {BUY_MUFFIN} from './muffinTypes'

// set initial state
const initialState = {
    numOfMuffins: 15
}

// create reducer function
const muffinReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_MUFFIN: return{
            // copy state
            ...state,
            numOfMuffins: state.numOfMuffins - 1
        }
        default: return state
    }
}

export default muffinReducer