import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link  } from 'react-router-dom'

//import {table} from 'react-bootstrap';

export default function Users() {
    const [Users, setUsers] = useState([]);

   

    useEffect(() => {
        loadUsers();
        });
        const loadUsers = async() => {
            const result = await axios.get("http://localhost:3008/users")
            setUsers(result.data.reverse())
        }

       /* const editUsers = () => {
            history.push("/Edit.js");
        }*/
    
    

    

        
       
    
   
    return (
        <>
            <div>
               
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                
                    <tbody>
                    {Users.map((users) => { return(
                        <tr key={users.id}>
                            
                            <td> {users.id} </td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <Link  className="btn btn-primary" to={`/Posts/${users.id}`}>View Post</Link>
                            <Link className="btn btn-primary" to={`/Todo/${users.id}`}>ViewTodo</Link>
                            
                            <Link className="btn btn-primary" to={`/Edit/${users.id}`}>Edit</Link>
                            
                        </tr>
                     ) })}
                    </tbody>
                
            </table>

            </div> 
        </>
    )
}