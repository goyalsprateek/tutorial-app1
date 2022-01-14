import React, { Component } from 'react'

export class ClassExample extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    
    clickHandler = () => {
        this.setState({
            count:this.state.count+1
        })
    }

    changeHandler = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    componentDidMount(){
        document.title=`Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
        console.log('executintg update')
        document.title=`Clicked ${this.state.count} times`
        } 
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Clicked {this.state.count} times</button>
                <input type='text' value={this.state.name} onChange={this.changeHandler} />
            </div>
        )
    }
}

export default ClassExample
