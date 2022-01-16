import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    posts : [],
    errorMsg:''
}

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                posts:action.payload,
                errorMsg:''
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                posts:[],
                errorMsg:'There is some error'
            }
        default:
            return state
    }
}

function Ex2() {
    const [state,dispatch] =useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res => {
            dispatch({
                type:'FETCH_SUCCESS',
                payload:res.data
            })
        })
        .catch(error => {
            dispatch({
                type:'FETCH_ERROR'
            })
        })
    },[])

    const {loading,posts,errorMsg} = state
        
    return (
        <div>
            {loading?'Loading...': posts.map(post => <h2>{post.title}</h2>)}
            {errorMsg?errorMsg:null}
        </div>
    )
}

export default Ex2
