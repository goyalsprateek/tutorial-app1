import React from 'react'

function ErrorComponent({name}) {
    if(name==='test'){
    throw new Error('Not a name !')
    }
    return (
        <div>
            Hello {name}
        </div>
    )
}

export default ErrorComponent
