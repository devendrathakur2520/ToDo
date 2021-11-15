import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
const AddUsers=()=>{
    let history=useHistory();
    const [newUsers,setnewUsers] = useState(
        {
            name:"",
            username:"",
            email:"",
            phone:""

        })
        const {name,username,email,phone}=newUsers;
       const onInputChange=(e)=>{
           //console.log(e.target.value)
           setnewUsers({...newUsers,[e.target.name]: e.target.value});
            
        }

         const onSubmit= async (e)=>{
            e.preventDefault();
            await axios.post(" http://localhost:3008/users",newUsers);
            
           history.push('/Users.js');
            
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
export default AddUsers;