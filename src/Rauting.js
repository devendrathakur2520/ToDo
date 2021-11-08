import React, { useEffect } from 'react';
import { Route,Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from './Users'
import Posts  from './Posts';
import Todos from './Todos.js'
import Comments from './Comments.js';
//import axios from 'axios';
export default function UsingRouter() {

   

   
    return (
        <Router>
            <div>

                <nav>
                    <ul>
                        <li>
                            <Link to='/Users.js'>Users</Link>
                        </li>

                        <li>
                            
                            <Link to='/Todos.js'>Todos</Link>
                        </li>

                        <li>
                            <Link to='/Posts.js'>Posts</Link>
                        </li>
                        <li>
                            <Link to='/Comments.js'>Comments</Link>
                        </li>

                    </ul>

                </nav>
             <Switch>



                 <Route path='/Users.js'>
                           <Users/>
                      </Route>
                    
                    <Route path='/Todos.js'>
                        <Todos/>
                    </Route>
                    <Route path='/Posts.js'>
                        <Posts/>
                    </Route>
                    <Route path='/Comments.js'>
                        <Comments/>
                    </Route>
                    

             </Switch>

            </div>
        </Router>

    ) 
}