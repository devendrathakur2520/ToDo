import React,{useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { getComments } from './action/index.js';
export default function Users (){
   const  {id}=useParams();
   const  viewComments=useSelector((state) => state.comments.comment)
   const  dispatch=useDispatch();
    //const [Comments,setComments]=useState([]);
    useEffect(()=>{
        
       loadUsers();
    },[])

    const loadUsers=async()=>{
       const results= await axios.get(`http://localhost:3008/posts/${id}/comments`);
       console.log(results);    
       dispatch(getComments(results.data));}   
            

    return(
        <>
            <div>
                <p>{viewComments.map(comments =>
                (<li key={comments.id}>
                <li>{comments.id}</li>
                <li>{comments.email}</li></li>))}</p>
            </div>    
        </>
    ) 
}