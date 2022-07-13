import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}


//function that gets the state as a parameter & returns an obj
const mapStateToProps = state => {
    return{
        // to access num of ice-creams I need to add 'iceCream' which is a key from rootReducer 
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

//function that gets Redux dispatch method as parameter & returns an obj
const mapDispatchToProps = dispatch => {
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(IceCreamContainer)