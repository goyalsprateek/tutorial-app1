import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             errorMsg :''
        }
    }

    static getDerivedStateFromError(error){
        console.log(error);
       return {
            errorMsg : 'Some error Occured'
        }
    }


    componentDidCatch(error,info){
        console.log(error)
    }
    

    render() {
        console.log(this.state.errorMsg)
        if(this.state.errorMsg)
        return (<h1>There is some error</h1>)
        else
        return (
            <div>
                Normal Task
            </div>
        )
    }
}

export default ErrorBoundary
