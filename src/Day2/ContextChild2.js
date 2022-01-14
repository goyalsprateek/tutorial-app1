import React,{useContext} from 'react'
import {UserContext,UserContext2} from './Context1'

function ContextChild2() {
    const userVal = useContext(UserContext)
    const userVal2 = useContext(UserContext2)
    
    return (
        <div>
            The context value is {userVal}
            The context value2 is {userVal2}
        </div>
    )
}

export default ContextChild2
