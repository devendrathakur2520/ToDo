import React from 'react';
export default function Reduce(){
let array=[2,3,4,5,6,7,8,9]
let  sum=array.reduce((accum,current)=>{
    return (accum+ current)
})
return(
    <>
      <p>{sum}</p>  

    </>
)
};