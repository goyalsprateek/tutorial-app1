import React from 'react'
import ContextChild from './ContextChild'

export const UserContext = React.createContext()

function Context1() {
    return (
        <div>
            <UserContext.Provider value={'TestValue'}>
            <ContextChild />
            </UserContext.Provider>
        </div>
    )
}

export default Context1
