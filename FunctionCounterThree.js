import React, {useState} from 'react'

function FunctionCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <form>
            <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
            <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
            <h2>Your first is - {name.firstName}</h2>
            <h2>Your first is - {name.lastName}</h2>
            <h1>{JSON.stringify(name)}</h1>
        </form>
    </div>
  )
}

export default FunctionCounterThree