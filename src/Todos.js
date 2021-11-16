import React,{useState ,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
export default function Todos (){
    const {id}=useParams();
    const [Todos,setTodos]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3008/users/${id}/todos`).then((response)=>{console.log(response)
    setTodos(response.data);});
      
    })
    return(
        <>
            <p>{Todos.map(todos=>
        (<li key={todos.id}>id:{todos.id}<li>title:{todos.title}</li></li>))}</p>
        
        </>
    ) 
}