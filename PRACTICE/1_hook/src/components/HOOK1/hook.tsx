// HOOK 1
// components/func ke ander events (onclick ,click addeventlitner .chang etc)kam nhi krty isi liye hmy hook1 diya gya

import { useState } from "react"

// name :USE STATE HOOK
// ye ak array return krta he 
// ye ak value or ak func rakhta he 
// hm osmy koch value de sktyhen or components ke ander use state ke func ke zariye hm os value ko ubdate kr skty hen


function Hook() {
 const [value1 , setvalue]=useState(0)
//  YE jo hmny value di ye ye ak value di he jesy hm ak varible ko bnaty hen to osko bydefault 0 value de dety hen or ye value hi array
// me value1 ke ander jati he ye jo hmny value likha he ismy 0 he or setvalue func he jisky zariye hm value ko ubdate krengy
  return (
    <div>
      <button onClick={()=>{setvalue(value1+1)}}>INCREAMENT</button>
      <h1>{value1}</h1>
      {/* ye jo hmny h1 ke ander lkha he value 1 wo bhi 0 he osky ander 0 ayga oper sy */}
      <button onClick={()=>{setvalue(value1-1)}}>DECREAMENT</button>
      {/* hmny setvalue ke func ke zariye apni value ko ubdate kdiya ke jesy hi click ho to 1+ ya - ho jay ab chlyga event hookki madad sy
      */}
      {/* ismy agr hm func () lga kr chlaygy to  hota ye he ke func kisi ka w8 nhi krta chal jata he agr hm () lgay to wo click hony
    //   ka bhi w8 nhi kryga direct chal jayga to hm nhi lgaygy agr() to ye click hony pr chly ga lekin msla ye he ke agr
    hmy koch likhna bhi ho () isky ander to hm kiya krengy to hm   isko handle  esy krengy ke hm isko ak call back fun bna dengy 
    yany hm ismy ak fun  bnay gy or phir osky ander hm setvalue func ko chlay gy or bahir waly func ko nhi chalaygy to wo click
    hony pr hi chaly ga or jb tk wo nhi chlyga to ander wala yani setvalue wala bhi nhi chaly ga is trha click pr func
    ko hm handel kr skty hen*/}



    {/* yani sbsy phly h1 me bydault value nazr aygi 0 phir osky bad wo bry gi setvalue func ke zariye click hony pr */}

    </div>
  )
}

export default Hook
