import React,{useState ,useEffect} from 'react';
import axios from 'axios';

export default function Todos (){
    const [Todos,setTodos]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3008/todos").then((response)=>{console.log(response)
    setTodos(response.data);});
      
    })
    return(
        <>
            <p>{Todos.map(todos=>
        (<li key={todos.id}>{todos.title}</li>))}</p>
        
        </>
    ) 
}