import React , {useState} from 'react'

function Hook1() {
    const initialVal = {
        name:'',
        dept:'',
        age:0
    }
    
    const [emp,setEmp] = useState(initialVal)
    const [data,setData] = useState([])

    return (
        <div>
            <input type='text' value={emp.name}  onChange={e => setEmp({...emp, name:e.target.value })} />
            <input type='text' value={emp.dept}  onChange={e => setEmp({...emp, dept:e.target.value })} />
            <input type='text' value={emp.age}  onChange={e => setEmp({...emp, age:e.target.value })} />
            <button onClick={()=>setData([...data,emp])} >Add</button>

            <div>
            {
                data.length?
                data.map(x=><h2>{x.name} {x.dept} {x.age}</h2>):
                'No Data'
            }
            </div>
        </div>
    )
}

export default Hook1
