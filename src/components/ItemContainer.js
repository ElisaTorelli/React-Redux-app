import React from 'react'
// connect store with Redux
import {connect} from 'react-redux'
import {buyCake, buyIceCream} from '../redux'



function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item} </h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToPros = (state, ownProps) => {
    // check if 'cake' props is sent or not
    const itemState = ownProps.cake 
    // if yes, access cake container
    ? state.cake.numOfCakes 
    // if not. access num of icecreams and icecream container
    : state.iceCream.numOfIceCreams

    return{
        item: itemState
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    // add condition
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return{
        buyItem: dispatchFunction
    }
}



// use connect function to dispatch actions but without subscribe them to the state changes in the store --> with null (instead of mapStateToPros)
export default connect(mapStateToPros, mapDispatchToProps) (ItemContainer)