import React from 'react'
import ContextChild from './ContextChild'
import ContextChild2 from './ContextChild2'

export const UserContext = React.createContext()
export const UserContext2 = React.createContext()

function Context1() {
    return (
        <div>
            <UserContext.Provider value={'Prateek Goel'}>
                <UserContext2.Provider value ={'React JS'}>
                    <ContextChild />
                <ContextChild2 />
                </UserContext2.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Context1
