import React,{useState ,useEffect} from 'react';
import axios from 'axios';

export default function Users (){
    const [Comments,setComments]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3008/comments").then((response)=>{console.log(response)
    setComments(response.data);});
       
    })

    return(
        <>
                <p>{Comments.map(comments =>
        (<li key={comments.id}>{comments.postId}</li>))}</p>
        </>
    ) 
}