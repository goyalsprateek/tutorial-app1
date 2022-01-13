import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             city:'delhi'
        }
    }

    usernameHandler = (e) => {
        this.setState(
            {
                username:e.target.value
            }
        )
    }

    cityHandler = e => {
        this.setState({
            city:   e.target.value
        })
    }

    submitHandler = e => {
        console.log(this.state)
        alert(this.state.username);
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Username</label>
                    <input type='text' value={this.state.username} 
                    onChange={this.usernameHandler} />

                    <label>City</label>
                    <select value={this.state.city} 
                    onChange={this.cityHandler} >
                        <option value='delhi'>Delhi</option>
                        <option value='mumbai'>Mumbai</option>
                    </select>

                    <div><button type='submit'>Submit</button></div>
                </form >
            </div>
        )
    }
}

export default FormHandling
