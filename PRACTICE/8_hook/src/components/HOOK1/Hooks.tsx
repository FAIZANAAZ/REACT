
import { useEffect, useRef, useState } from "react"
// USEREF 
//      isy ye hoga ke ismy hm jo rakhengy wo component rerender hoy pr  nhi run hoga

// or agr hm chahty  hen ke ye hr render pr chaly to hm osy kisi esy hook me rakhdengy jo har rerendering pr chlta ho

function Hook() {
  const [inputvalue,setinputvalue]=useState("")
  const count = useRef(0)
  // isko bhi hm ak by defult value dety hen or iski value ko dekhny ke liye hm variable ke name ke sath current likhna lazmi hot he

  useEffect(()=>{
    count.current=count.current+1
  })
  // ab useref ki value hr render hony pr chang hogi kioky useref to nhi chlta lekin hny isko useeffect ke ander rakha he or 
  // useeffect to hr rendring pr chlta he to wo jb chaly ga to osky ander useref ki value ko hm count.current ke zariye chang hori he +1  or wo set bhi hori he sath sath count.current me or wo
  // jaygi useref ki 0 ki jga pr

  return (
    <div>

      <input className="border" type="text" 
      value={inputvalue}
      onChange={(e)=>setinputvalue(e.target.value)}
      // on chang eventlistner hota he yha ka jb ye chalyga to wo input ki value ko target krky set hoga setinputvalue me or wahi usestat me ayga or wahi input ki value me set ho jayga or h1 me bhi
       />
      <h1> Render Count :{count.current}</h1>
    </div>
  )
}

export default Hook
