import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
    // access number of cakes in Redux state & stored it in a numOfCakes variable
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
        {/* include variable in JSX */}
            <h2>Number of Cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer