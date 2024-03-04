import React, {useState} from 'react'

function FunctionCounter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>FunctionCounter</h1>
        <button onClick={() => setCount(count +1)}>Count {count} Times</button>
    </div>
  )
}

export default FunctionCounter