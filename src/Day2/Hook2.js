import React,{useState,useEffect} from 'react'

function Hook2() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log('executing useeffect')
        document.title = `Clicked ${count} times`

    },[count])

    return (
        <div>
            <button onClick={()=>setCount(count+1)}> Functional Button clicked {count} times </button>
            <input value={name} onChange={e=>setName(e.target.value)} />
        </div>
    )
}

export default Hook2