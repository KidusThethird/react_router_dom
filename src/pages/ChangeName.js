//import { useState } from "react"

import { AppContext } from "../App"
import { useContext } from "react"

export const ChangeName= ()=>{

    const{setUsername} = useContext(AppContext);

  var tempname= "";  
   const handleEvent = (event) =>{
    console.log(event.target.value)
    tempname = event.target.value;
   } 
    
    
    return <div>
        <input onChange={handleEvent} />
        <button onClick={()=>(setUsername(tempname))}>Change</button>
    </div>



}