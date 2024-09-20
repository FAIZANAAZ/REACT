import { useCallback, useMemo, useState } from "react"


let [value,setValue]=useState(0)


let usecall =useCallback(()=>{

setValue(value+1)
},[value])
//************************************ */

let usememo =useMemo(()=>{

  setValue(value+1)
  },[value])
  
// usecallback or use memo takriban same hota he ismy ye ak func leta he or ak array array me hm wo chiz likhty hen jispr ye depend krta he
// usememo or usecallback krty ye hen ke ye code ko rok dety hen os code ko jo usememo ya callback ke ander likha hoga ye depend 
// krty hen apny array pr yani pora component chly ga or ye ak bar to chly gy but dobara tb chaly gy jb isky array me
// di gai value chaly gi osky ilawa ye nhi chalyga 

// jesy yha hmny ak code likha he  jismy hmny usestate ki value chang ki he callback or use mamo me or onky arry me bhi wahi value
// ko rakh diya he yani usestat ki hi value pr ye depend krta he jb usestat ki value chang hogi to hi ye dono chalygy
// otherwise nhi chalengy 


// ismy jo code hmny likha he osky motabik ye chalyga har bar dono kioky sbsy phly to yefunc chalygy ak bar zaror to wo value
// ko 0 sy 1 krdega to wo oper jayga dobara to wo func ki wja sy usestate ki value ko 0 sy 1 krdega phir wo nichy ayga
// dobara dekhyga hn phly to value 0 thi ab 1 he to wo dobara chal jayga or wo chalga to value ko 2 krdega or oper jakr
// dobara value ko 2 krdega phir wo nichy ayga or dekhyga ke hn phly balue 1 thi ab 2 ho gai phir wo chala dega