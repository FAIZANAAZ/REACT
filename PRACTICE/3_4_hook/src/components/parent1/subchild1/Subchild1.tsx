import { useContext } from "react"
import { myname } from "../../../App"



function Subchild1() {
  
let usedata= useContext(myname)
  return (
    <div>
      <h1>{usedata}</h1>
    </div>
  )
}

export default Subchild1

