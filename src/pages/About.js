import React, { Component } from 'react'
import { WithRouter } from '../Day3/WithRouter'

export class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                About Page
                <button onClick={()=>{
                    this.props.navigate('/contact')
                }}>Contact</button>
            </div>
        )
    }
}

export default WithRouter(About)
