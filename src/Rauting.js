import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from './Users'
import Posts from './Posts';
import Todos from './Todos.js'
import Comments from './Comments.js';
import AddUsers from './AddUsers'
import Edit from './Edit.js'
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
                            <Link to="/Posts">Posts</Link>
                        </li>
                        <li>
                            <Link to='/Comments.js'>Comments</Link>
                        </li>
                        </ul>
                            <Link to='AddUsers.js'>AddUsers</Link>

                </nav>
                <Switch>



                    <Route path='/Users.js'>
                        <Users />
                    </Route>

                    <Route path='/Todos/:id'>
                        <Todos />
                    </Route>
                    <Route path='/Posts/:id'>
                        <Posts />
                    </Route>
                    <Route path='/Comments.js'>
                        <Comments />
                    </Route>
                    <Route exact path='/AddUsers.js'>
                        <AddUsers />
                    </Route>
                    <Route path='/Edit/:id'>
                        <Edit />
                    </Route>
                    <Route path='/Comments/:id'>
                        <Comments />
                    </Route>

                </Switch>

            </div>
        </Router>

    )
}