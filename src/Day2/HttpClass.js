import React, { Component } from 'react'
import axios from 'axios'

 class HttpClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
             userid:''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            this.setState({
                users:response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.userid !== this.state.userid){
        console.log('executing component update')
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.userid}`)
        .then(response => {
            this.setState({
                users:[response.data]
            })
        })
        .catch(error => {
            console.log('in error')
            console.log(error)
        })
    }
    }

    render() {
        const {users,userid} = this.state
        return (

            <div>
                <input type='text' value={userid} onChange={e=>this.setState({
                    userid:e.target.value
                })} />
                {
                    users.length?
                    users.map(user => <h2 key={user.id}>{user.id}{user.name}</h2>):
                    'No Data.'
                }
            </div>
        )
    }
}

export default HttpClass
