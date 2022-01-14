import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             errorMsg:''
        }
    }
    

    static getDerivedStateFromError(error){
        return {
            errorMsg:'Some error'
        }
    }

    componentDidCatch(error,info){
        console.log(info)
    }

    render() {
       if(this.state.errorMsg){
           return <h1>Something went Wrong !!!</h1>
       } else
       return this.props.children
    }
}

export default ErrorBoundary