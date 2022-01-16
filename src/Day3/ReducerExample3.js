import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const initialState = {
    loading:true,
    posts:[],
    errorMsg:''
};

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCEESS':
            return {
                loading:false,
                posts: action.payload,
                errorMsg:''
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                posts: [],
                errorMsg:action.payload
            }
        default:
            return state;
    }
}

function ReducerExample3() {

   const [data,dispatch] = useReducer(reducer,initialState)

   const nav2 = useNavigate()

   useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts/')
       .then(res => {
           dispatch({
               type:'FETCH_SUCEESS',
               payload:res.data
           })
       })
       .catch(err=>{
           dispatch({
               type:'FETCH_ERROR',
               payload:'There is some error'
           })
       })

       return () => {
        console.log('Clean up tasks') 
       }

   },[])

    return (
        <div>
            <button onClick={()=>{nav2(-1)}} >Back</button>
            {
                data.loading?
                'Loading....':null
            }
            {
                data.errorMsg?
                data.errorMsg:
                data.posts.map(post=><h2>{post.title}</h2>)

            }
        </div>
    )
}

export default ReducerExample3
