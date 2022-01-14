import React, { Component } from 'react'

class RefExample extends Component {

    constructor(props) {
        super(props)
    
        this.ref1 = React.createRef()
    }

    componentDidMount(){
        this.ref1.current.focus()
    }
    
    clickHandler = () => {
        console.log(this.ref1.current.value)
    }


    render() {
        return (
            <div>
                <input ref={this.ref1} type='text' />
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefExample
