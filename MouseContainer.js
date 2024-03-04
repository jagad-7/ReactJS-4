import React,{useState, useEffect} from 'react'
import HooksMouse from './HooksMouse'

function MouseContainer() {
    const [dispay, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!dispay)}>Toggle Display</button>
        {dispay && <HooksMouse />}
    </div>
  )
}

export default MouseContainer