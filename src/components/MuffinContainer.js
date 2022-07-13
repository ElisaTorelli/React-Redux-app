import React from 'react'
import {connect} from 'react-redux'
import { buyMuffin } from '../redux'

const MuffinContainer = (props) => {
    return (
        <div>
            <h2>Number of muffins - {props.numOfMuffins}</h2>
            <button onClick={props.buyMuffin}>Buy Muffin</button>
        </div>
    )
}


//function that gets the state as a parameter & returns an obj
const mapStateToProps = state => {
    return{
        // to access num of muffin I need to add 'muffin' which is a key from rootReducer 
        numOfMuffins: state.muffin.numOfMuffins
    }
}

//function that gets Redux dispatch method as parameter & returns an obj
const mapDispatchToProps = dispatch => {
    return{
        buyMuffin: () => dispatch(buyMuffin())
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MuffinContainer)