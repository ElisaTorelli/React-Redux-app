import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'



const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(NewCakeContainer)