import React, {useState} from 'react'

function FunctionalCounterTwo() {
    const intialCount = 0
    const [count, setCount] = useState(intialCount)
    
    const incrementFive = ()=>{
        for(let i=0; i<5; i++)
        setCount(prevCount => prevCount + 1)
    }
  return (
    <div>
        <h1>FunctionalCounterTwo</h1>
        Count : {count}
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increment </button>
        <button onClick={()=> setCount(prevCount => prevCount - 1)}> Decrement </button>
        <button onClick={()=> setCount(intialCount)}>Reset</button>
        <button onClick={incrementFive}>Increment5</button>
    </div>
  )
}

export default FunctionalCounterTwo