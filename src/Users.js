import React,{useState ,useEffect} from 'react';
import axios from 'axios';

export default function Users (){
    const [Users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3008/users").then((response)=>{
            console.log(response.data)
    setUsers(response.data);});
       
    })
    
    return(
        <>
        <p>{Users.map(users=>
        (<li key={users.id}>{users.name}</li>))}</p>
        </>
    )
}