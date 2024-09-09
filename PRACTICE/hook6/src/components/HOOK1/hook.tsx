import { useReducer } from "react";

// useReducer
// Ye useState ki tarah ka hota hai. Isme bhi ek value aur ek function hota hai aur value ko hum function ki madad se change karte hain.
// Isme click karke jab hum function chala kar value dete hain aur value ko change karte hain. Isme hum click par sirf function me
// value ki type dete hain ek object me jise hum extra function wale parameter me action me use karte hain.
// Isme difference ye hota hai ke ye jaha hum by default value dete hain waha ek by default value ke sath sath ek aur function bhi rakhta hai
// aur us function me hum logic build kar sakte hain value ko use karte huye.

// Aur ye function bhi apne andar 2 parameters rakhta hai: action aur state.
// State value hi hota hai. State me wahi value aati hai jo hum value rakhte hain useReducer me by default.
// Aur action ko hum type to dete hain lekin uski asal type wo mani jati hai jo hum click me function ko object me di hui hoti hai.

function logicbuildfun(state: any, action: any) {
  // Ye logic wala function hai
  // Action ki type hai 'faiza'
  if (action.type === "ON") {
    return "ON BUTTON";
    // Isme hum aise hi likhte hain, simple return likh kar value.
  } else if (action.type === "OFF") {
    return " BUTTON OFF";
  }

    return state;
  
}

function Hook() {
  // Reducer ko initialize kar rahe hain.
  let [value, usereducer] = useReducer(logicbuildfun, "BUTTON");

  return (
    <div >
      <button className="h-[70px] flex justify-center items-center mb-10 w-[130px] bg-red-600 text-black border-solid border-[5px]  text-[30px] border-black font-bold  " onClick={() => usereducer({ type: "ON" })}>ON</button>
      {/* Button ke onClick mein syntax theek kar diya hai. */}
      <h1 className="h-[80px]  flex justify-center items-center  w-[130px] bg-yellow-400 text-black   text-[30px]  font-bold  ">{value}</h1>
      <button className="h-[70px] flex justify-center items-center mt-10 w-[130px] bg-red-600 text-black border-solid border-[5px]  text-[30px] border-black font-bold  " onClick={() => usereducer({ type: "OFF" })}>OFF</button>
    </div>
  );
}

export default Hook;
