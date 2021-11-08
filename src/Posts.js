import React,{useState ,useEffect} from 'react';
import axios from 'axios';

export default function Posts (){
    const [Posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3008/posts").then((response)=>{console.log(response)
    setPosts(response.data);});
       
    })
    return(
        <>
                <p>{Posts.map(posts=>
        (<li key={posts.id}>{posts.userId}</li>))}</p>
        
        </>
    ) 

}