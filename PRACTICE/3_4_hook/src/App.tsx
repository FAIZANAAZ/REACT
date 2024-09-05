import Child1 from './components/parent1/Child1'
import './App.css'
import Child2 from './components/parent2/Child2'
import Child3 from './components/parent3/Child3'
import { createContext } from 'react'

export const myname = createContext("")
// isko emty rakh kr hm iska data value me de dengy
function App() {


  return (
    <>
    <myname.Provider value={"FAIZA  NAAZ"}>

            <Child1/>
             <Child2/>
             <Child3/>

    </myname.Provider>
            



    </>
  )
}

export default App
