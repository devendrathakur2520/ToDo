import React,{useState ,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
export default function Posts (){
   const  {id}=useParams();
    const [Posts,setPosts]=useState([]);
    
    useEffect(()=>{
        loadUsers();
       
    },)
    const loadUsers=async ()=>{
        await axios.get(`http://localhost:3008/users/${id}/posts`).then((response)=>{
            
                setPosts(response.data);});
    }
    return(
        <>
        <div>
            <div>
                <ul>
                    {Posts.map((posts) =>(
                        <li key={posts.id}>id:{posts.userId}
                       <li>title:{posts.title}</li>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            
        </>
    ) 

}