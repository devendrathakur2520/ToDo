import { combineReducers } from 'redux';
import users from './User';
import posts from './Posts'
import todos from './Todo';
import comments from './Comments'
import addUsers from './AddUser'
import editUsers from './EditUser'
 const reducer = combineReducers({
    users,
    posts,
    todos,
    comments,
    addUsers,
    editUsers
});
export default reducer;