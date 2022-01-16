import React,{useReducer} from 'react'

const initialState = {
    count1:0,
    count2:0
};

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {
                count1:state.count1 + action.val,
                count2:state.count2 + action.val
            }
        case 'decrement':
            return {
                count1:state.count1 - action.val,
                count2:state.count2 - action.val
            }
            case 'decrement 2':
                return {
                    ...state,
                    count2:state.count2 - action.val
                }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function ReducerExample2() {

   const [count,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h2>Count 1: {count.count1}</h2>
            <h2>Count 2: {count.count2}</h2>
            
            <button onClick={() => {dispatch({type:'increment',val:1})}}>Increment 1</button>
            <button onClick={() => {dispatch({type:'increment',val:2})}}>Increment 2</button>
            <button onClick={() => {dispatch({type:'decrement',val: 1})}}>Decrement 1</button>
            <button onClick={() => {dispatch({type:'reset'})}}>Reset</button>
            <button onClick={() => {dispatch({type:'decrement 2',val: 1})}}>Decrement 1 for counter 2</button>
        </div>
    )
}

export default ReducerExample2
