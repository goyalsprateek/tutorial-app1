import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

export class LifecyclyParent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:'' 
        }

        console.log('LifecyclyParent constructor')
    
    }
    
    static getDerivedStateFromProps(){
        console.log('LifecyclyParent getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('LifecyclyParent shouldComponentUpdate')
        return true;
    }

    clickHandler= () => {
        this.setState({
            name:'Prateek'
        })
    }

    render() {
        console.log('LifecyclyParent render')
        return (
            <div>
                Hello LifecyclyParent
                <LifeCycleChild />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }

    componentDidMount(){
        console.log('LifecyclyParent componentDidMount ');
    }

    componentDidUpdate(prevProps){
        console.log('LifecyclyParent componentDidUpdate ***** ');
    }
}

export default LifecyclyParent
