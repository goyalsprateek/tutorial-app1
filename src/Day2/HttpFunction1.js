import React,{useState,useEffect} from 'react'
import axios from 'axios'

function HttpFunction1() {
    const [posts,setPosts] = useState([])
    const [id,setId] = useState('')

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPosts([res.data])
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])

    return (
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)} />
          {
              posts.length?
              posts.map(post => <h2 key={post.id}>{post.id} {post.title}</h2>):
              'No Data'
          }
        </div>
    )
}

export default HttpFunction1
