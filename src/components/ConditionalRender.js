import React, { Component } from 'react'

export class ConditionalRender extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {
        let username = this.state.isLoggedIn?'Prateek':'Guest';
        

        return (
            <div>
                Hello {username}
            </div>
        )
        
    }
}

export default ConditionalRender
