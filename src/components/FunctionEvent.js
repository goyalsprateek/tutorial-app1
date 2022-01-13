import React from 'react'

function FunctionEvent() {

    function clickHandler(){
        console.log('click handler function')
    }

    return (
        <div>
            <button onClick={clickHandler}>FunctionButton</button>
        </div>
    )
}

function clickHandler(){
    console.log('object')
}


export default FunctionEvent