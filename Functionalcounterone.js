import React, {useState, useEffect} from 'react'

function Functionalcounterone() {
    const [count, setCount] =useState(0)
    const [name, setName] = useState('')
     
    useEffect(()=>{
        console.log("useEffect - Updating document title") 
        document.title= 'you Cliked ${count} times'
    }, [count])
  return (
    <div>
        <h1>FunctionalCounterOne</h1>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={()=>setCount(count + 1)}>Clicked {count}</button>
    </div>
  )
}

export default Functionalcounterone