import React,{useRef,useEffect} from 'react'

function RefExample2() {
    const refName = useRef(null)

    useEffect(()=>{
        refName.current.focus()
    },[])

    return (
        <div>
            <input ref={refName} />
        </div>
    )
}

export default RefExample2
