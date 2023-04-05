import React from "react";
import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);

function handlechange(type){
if(type==='increment'){
setCount(count+1);
}else if(type==='decrement' && count >=1){ 
setCount(count-1)
}
}
    return(
        <div id='container' className='container'>
        <div id='row' className="row">
        <button id="increment" onClick={()=>handlechange('increment')}>+
        </button>
        <div className="empty">
        
        </div>
        <p id="value">
        {count}
        </p>
        <div className="empty">
        
        </div>
        <button id='decrement' onClick={()=>handlechange('decrement')}>
        -
        </button>
        </div>
        </div>
    )
}
export default Counter;