import { useEffect, useState } from "react"

// rerander hony ka matlb hota he code ka html me convert hokr ubdate hona

function Hook() {
  const [num ,setValue]=useState(0)

  //*****2nd hook */
  // ye 3 trha ke hoty hen
  useEffect(()=>{
    console.log("i am just onee useeffect");
    
  },[])
  // ye jb bhi reload hoga srif ak bar chalyga isky ander ka code osky bad nhi chlyga
  useEffect(()=>{
    console.log("i am  useeffect runs on every render/update");

  })
  // jismy hm [] nhi dety wo jb bhi reload hoga tb bhi chlyga or jb bhi page ka koi bhi chiz rerender hogi ya ubdate hogi wo chlyga 
  // matlb koi button click hoga or usy koi value chang hogi jesy hmny setvalue ke zariye num ko chang kiya button ke click pr to jb bhi
  // button click hoga or 1 2 brhy ga to ye usseffect ka code bhi chlyga zaror to ismy hm esa code likhengy jisy hmy har bar chalana ho
  
  useEffect(()=>{
    console.log("i am dependent useeffect");

  },[num])
//jisky array me hm koch de dety hen ye useeffect hota he dependent yani hm jo bhi chiz array mw dengy wo ospr depend ho jayga 
// phir jb array wlaa code chlyga to ye fun bhi chlyga yani jesy hmny diya he ismy num tm jb jb click krny pr numki value chang hogi
// tb tb ye useeffect ka code bhi run hoga lazmi osky ilawa ye nhi hoga

  return (
    <div>
   
   <button onClick={()=>{setValue(num+1)}}>INCREAMENT</button>
   <h1>{num}</h1>
   <button  onClick={()=>{setValue(num+1)}}>DECREAMENT</button>

    </div>
  )
}

export default Hook
