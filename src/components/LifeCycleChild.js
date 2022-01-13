import React, { Component } from 'react'

export class LifeCycleChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log('LifeCycleChild constructor')
    
    }
    
    static getDerivedStateFromProps(){
        console.log('LifeCycleChild getDerivedStateFromProps')
        return null
    }

    render() {
        console.log('LifeCycleChild render')
        return (
            <div>
                Hello LifeCycleChild
            </div>
        )
    }

    componentDidMount(){
        console.log('LifeCycleChild componentDidMount ');
    }

    componentDidUpdate(){
        console.log('LifeCycleChild componentDidUpdate ***** ');
    }
}

export default LifeCycleChild
