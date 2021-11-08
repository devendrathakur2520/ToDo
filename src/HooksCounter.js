import React,{useState} from 'react';
export default function HooksCounter() {
    const [count,setCount] =useState(0);

    const OnIncrement=()=>{
        setCount(count+1);
    }

    const OnDecrement=()=>{
      setCount(count-1);
    }
    return (
        <div className="container text-align:center">
            {count}
            <button onClick={OnIncrement}>Increment</button>
            <button onClick={OnDecrement}>Decrement</button>
</div>
    )
}