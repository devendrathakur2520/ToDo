import React,{useState ,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'

export default function Users (){
   const  {id}=useParams();
    const [Comments,setComments]=useState([]);
    useEffect(()=>{
        
       loadUsers();
    },[])

    const loadUsers=async()=>{
       const results= await axios.get(`http://localhost:3008/posts/${id}/comments`);
       console.log(results);    
       setComments(results.data);}   
            

    return(
        <>
            <div>
                <p>{Comments.map(comments =>
                (<li key={comments.id}>
                <li>{comments.id}</li>
                <li>{comments.email}</li></li>))}</p>
            </div>    
        </>
    ) 
}