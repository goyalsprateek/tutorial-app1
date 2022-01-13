import React,{useState} from 'react'


function HookState() {

const initialValue = {
    name:'',
    count:0
}
    const [data,setData] =useState(initialValue)

    function clickHandler(){

    }

    return (
        <div>
            Count {data.count}
            <button onClick={clickHandler}>Increment</button>
        </div>
    )
}

export default HookState

//create a page
//1. 2 input fields and button - form
//2. on submit -> console.log data
//3. Add a message on same page Thanks for Submission
