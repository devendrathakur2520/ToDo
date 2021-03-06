import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom'
import {editUser} from './action/index.js'
import { useSelector,useDispatch } from 'react-redux';

const Edit=()=>{
    let history=useHistory();
    let {id}=useParams()
  const editUsers=useSelector((state) => state.editUsers.edituser);
  const dispatch=useDispatch();
   /* const [newUsers,setnewUsers] = useState(
        {
            name:"",
            username:"",
            email:"",
            phone:""

        })*/
        const {name,username,email,phone}=editUsers;
       const onInputChange=(e)=>{
           //console.log(e.target.value)
            dispatch(editUser({...editUsers,[e.target.name]: e.target.value}));
            
        }
        useEffect(()=>{
             axios.get(`http://localhost:3008/users/${id}`).then((response)=>{
                dispatch(editUser(response.data));
                console.log(response.data)
             })
            
        },[]);
        

         const onSubmit= async (e)=>{
            e.preventDefault();
            await axios.put(`http://localhost:3008/users/${id}`,editUsers);
            
           history.push('/Users');
            
            };

            

    return(
        <>
        <div  className="mb-3">
        <form onSubmit={(e)=>{onSubmit(e)}}>
        Name:
        <input type="text" name="name" value={name} onChange={(e =>onInputChange(e))}/>
        username:
        <input type="text" name="username" value={username} onChange={(e)=>onInputChange(e)}/>
        email:
        <input type="text" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
        phone:
        <input type="text" name="phone" value={phone} onChange={(e)=>onInputChange(e)}/>
        submit:
        <button type="submit" className="btn btn-primary"  onSubmit={()=>onSubmit()}>Submit</button>
        </form>
        </div>
        </>
    )
}
export default Edit;