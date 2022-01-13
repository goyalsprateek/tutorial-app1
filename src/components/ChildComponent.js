import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.prop1('Prateek')}>Click</button>
        </div>
    )
}

export default ChildComponent