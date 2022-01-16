import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { buyItem } from '../redux/shop/shopActions'
import {fetchPosts} from '../redux/user/userAction'
import {connect} from 'react-redux'
import {useSelector,useDispatch} from 'react-redux'

function Home(props) {
    const nav1 = useNavigate()
    const val2 = useSelector(state => state.shop.noOfItems)
    const posts = useSelector(state => state.user.posts)
    const dispatch2 = useDispatch()
    const loadHandler = () => {
        dispatch2(fetchPosts())
    }
    return (
        <div>
            This is home Page.
            
            No of Items:{val2}
            <button onClick={()=>dispatch2(buyItem())} >Buy</button>

            <Button onClick={() => {nav1('about')}} variant="primary">About</Button>
            
            <button onClick={loadHandler} >Load Data</button>
            <div>
            {
                posts.length?
                posts.map(post => <h3 key={post.id}>{post.title}</h3>):
                'No Data'
            }
            </div>
        </div>
    )
}

export default Home
