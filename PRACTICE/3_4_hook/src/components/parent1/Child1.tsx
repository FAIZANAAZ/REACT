
// phly ye hota tha ke agr 1 sy zaada components hoty thy or onky ander parentfile hoty thi or osky  ander childern file bhi to hmy agr koi data apna
// childfile me bhejna hota tha to hmy phky osky components me jana prhta tha phir osky ander ki parentfile me or osky bad child file me
// direct jany ka koi rasta nhi tha or child sy data lany ke liye bhi phly child sy oski parent file ko phir osky component ko phir lekr aty thy
// isy tor ke liye aya createcontext  usecontext
// createcontext 
//            ismy hm wo chiz likhty hen jis data ko hmy bhejna hota he or os file me use krty hen jha sy data ko bhejnaho
            //  or is folder me hm use krty hen provider or os provider ke ander hm os func yani file ko rakhty hen jha bheja hota he
          //  or variable data waly ko hmy export bhi krna pryga
          // iska data wla variable func ke bahir bny ga creatcontext wala
// usecontext 
//            ismy hm wo data likhty hen jha data ayga    or os file me use krty hen jha data a rha he use ke liye 
             //  or is folder me hm use krty hen consumer 
              // iska data wla variable func ke ander bny ga usecontext wala
              
import Subchild1 from "./subchild1/Subchild1"


function Child1() {

  return (
    <div>
   
   <Subchild1/>

    </div>
  )
}

export default Child1
