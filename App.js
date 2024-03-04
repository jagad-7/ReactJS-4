import React, {useReducer} from 'react'
import './App.css';
import RedCompA from './Components/RedCompA';
import RedCompB from './Components/RedCompB';
import RedCompC from './Components/RedCompC';
import RedDataFetching from './Components/RedDataFetching';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' : 
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
  //  <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
  //    <div className="App">
  //     Count - {count}
  //     <RedCompA />
  //     <RedCompB />
  //     <RedCompC />
  //   </div>
  //  </CountContext.Provider>

  <div className='App'>
  <RedDataFetching />
  </div>
  );
}

export default App;
