import React,{useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {getTodo} from './action/index.js';
import {useSelector,useDispatch} from 'react-redux'

export default function Todos (){
    const {id}=useParams();
  
   const viewTodo= useSelector((state) => state.todos.todo)
   const dispatch=useDispatch();
    //const [Todos,setTodos]=useState([]);
    useEffect(()=>{
                    loadTodos();
                  })

    const loadTodos=async ()=>{
        const result=await axios.get(`http://localhost:3008/users/${id}/todos`);
              dispatch(getTodo(result.data))}
    
    return(
        <>
            <div>
            {viewTodo.map((todos)=>
            (<li key={todos.id}>
            id:{todos.id}<li>
            title:{todos.title}
                </li>
            </li>))}
            </div>





        
        
        </>
    ) 
}