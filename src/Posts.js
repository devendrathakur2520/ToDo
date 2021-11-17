import React,{ useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Link  } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getPost} from './action/index.js'
export default function Posts (){
   const  {id}=useParams();
   // const [Posts,setPosts]=useState([]);
    
    const dispatch = useDispatch();
    const Posts=useSelector((state)=> state.posts.post)

    useEffect(()=>{
        loadUsers();
       
    },)
    const loadUsers=async ()=>{
        const result=await axios.get(`http://localhost:3008/users/${id}/posts`);
            dispatch(getPost(result.data))
        
    }
    return(
        <>
        <div>
            <div>
                <ul>
                    {Posts.map((posts) =>(
                        <li key={posts.id}>id:{posts.userId}
                       <li>title:{posts.title}</li>
                       <Link className="btn btn-primary" to={`/Comments/${posts.id}`}>ViewComments</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            
        </>
    ) 

}