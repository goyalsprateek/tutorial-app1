import React, { Component } from 'react'
import axios from 'axios'

class HttpClassPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userid:'',
             title:'',
             body:''
        }
    }
    
    submitHandler = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        const {userid,title,body} = this.state
        return (
            <div>
                <input type='text' value={userid} onChange={e=>this.setState({
                    userid:e.target.value
                })} />
                <input type='text' value={title} onChange={e=>this.setState({
                    title:e.target.value
                })} />
                <input type='text' value={body} onChange={e=>this.setState({
                    body:e.target.value
                })} />
                <button onClick={this.submitHandler}>Submit</button>

                <h2>{JSON.stringify(this.state)}</h2>
            </div>
        )
    }
}

export default HttpClassPost
