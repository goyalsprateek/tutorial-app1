import React,{useContext} from 'react'
import {UserContext} from './Context1'

function ContextChild2() {
    const userVal = useContext(UserContext)
    return (
        <div>
            The context value is {userVal}
        </div>
    )
}

export default ContextChild2
