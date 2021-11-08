import React,{useState} from 'react';
 export default function UseHooks() {
    const [name,setname]=useState("Devendra");

    const ChangeName=()=>{
        setname("Thakur Devendra Singh ")

    }
    return(
         <div>{name}
            {ChangeName}
             <button onClick={ChangeName}> Click Me</button>
         </div>
    )
}