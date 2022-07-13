import {BUY_ICECREAM} from './iceCreamTypes'

// set initial state
const initialState = {
    numOfIceCreams: 20
}

//create reducer function
const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            //copy the state
            ...state,
            // change the state
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state 
    }
}

export default iceCreamReducer