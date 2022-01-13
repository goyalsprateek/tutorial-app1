import React,{useState} from 'react'

function HookState() {

const initialValue = {
    name:'',
    count:0
}
    const [data,setData] =useState(initialValue)

    return (
        <div>
            Count {data.count}
            <button onClick={e=>setData({count:data.count+1})}>Increment</button>
            <input type='text' value={data.name} onChange={e=>setData({name:e.target.value})} />
            <h2>{JSON.stringify(data)}</h2>
        </div>
    )
}

export default HookState

//create a page
//1. 2 input fields and button - form
//2. on submit -> console.log data
//3. Add a message on same page Thanks for Submission