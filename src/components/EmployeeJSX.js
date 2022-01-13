import React from 'react'
const mystyle = {fontSize:'72px',color:'blue'}

function EmployeeJSX({emp}) {
    
    return (
        <div style={mystyle}>
            Hi..I am {emp.name} from {emp.dept}.
        </div>
    )
}

export default EmployeeJSX
