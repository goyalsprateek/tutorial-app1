import React from 'react'
import ReactDOM from 'react-dom'

function PortalsExample() {

    return ReactDOM.createPortal(
        <div>
            Hello Portal
        </div>,document.getElementById('root2')
    )
}

export default PortalsExample
