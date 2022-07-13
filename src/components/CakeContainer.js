import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


//function that gets the state as a parameter & returns an obj
const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

//function that gets Redux dispatch method as parameter & returns an obj
const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CakeContainer)