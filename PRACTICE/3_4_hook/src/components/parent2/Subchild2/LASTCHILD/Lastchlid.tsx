import { useContext } from "react"
import { myname } from "../../../../App"



function Lastchlid() {
  let usename = useContext(myname)
  return (
    <>
      <h1>{usename}</h1>
    </>
  )
}

export default Lastchlid
