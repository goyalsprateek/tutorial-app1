import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    testFunction = (message) => {
        console.log(`Parent method is executed ${message}`)
    }

    render() {
        return (
            <div>
                 <ChildComponent prop1={this.testFunction}  />
            </div>
        )
    }
}

export default ParentComponent
