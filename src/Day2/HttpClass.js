import React, { Component } from 'react'
import axios from 'axios'

 class HttpClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
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

    render() {
        const {users} = this.state
        return (
            <div>
                {
                    users.length?
                    users.map(user => <h2 key={user.id}>{user.name}</h2>):
                    'No Data.'
                }
            </div>
        )
    }
}

export default HttpClass
