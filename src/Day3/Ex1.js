import React,{useReducer} from 'react'

const initialVal = {
    count1:0
};

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return { count1:state.count1+action.value};
        case 'decrement':
            return  { count1:state.count1-action.value};
        default:
            return state
    }
}

function Ex1() {
   const[count,dispatch] = useReducer(reducer,initialVal);

    return (
        <div>
            Count:{count.count1}
            <button onClick={()=>{dispatch({type:'increment',value:1})}}>Increment</button>
            <button onClick={()=>{dispatch({type:'decrement',value:1})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:'increment',value:5})}}>Increment 5</button>
            <button onClick={()=>{dispatch({type:'decrement',value:5})}}>Decrement 5</button>
        </div>
    )
}

export default Ex1