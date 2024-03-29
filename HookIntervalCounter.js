import React, {useState, useEffect} from 'react'

function HookIntervalCounter() {
    const [count, setCount] = useState(0)
    const tick = () =>{
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() =>{
        function doSomthing(){
            
        }
        doSomthing()
        const interval = setInterval (tick, 1000)
        return () =>{
            clearInterval(interval)
        }
    },[])

  return (
    <div>
        <h2> 
            {count}
        </h2>
    </div>
  )
}

export default HookIntervalCounter