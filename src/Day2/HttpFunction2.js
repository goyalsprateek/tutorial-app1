import React,{useState,useEffect} from 'react'
import axios from 'axios'

function HttpFunction2() {

    const initialVal = {
        userid:'',
        title:'',
        body:''
   }
    const[user,setUser] = useState(initialVal)

    const submitHandler = () => {
        console.log(user)
        axios.post('https://jsonplaceholder.typicode.com/posts/',user)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div>
            <input type='text' value={user.userid} onChange={e=>setUser({
               ...user ,userid:e.target.value
            })} />
               <input type='text' value={user.title} onChange={e=>setUser({
               ...user ,title:e.target.value
            })} />
                <input type='text' value={user.body} onChange={e=>setUser({
              ...user, body:e.target.value
            })} />
                <button onClick={()=>submitHandler()}>Submit</button>

                {JSON.stringify(user)}
        </div>
    )
}

export default HttpFunction2
