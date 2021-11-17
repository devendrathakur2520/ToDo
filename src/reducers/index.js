import { combineReducers } from 'redux';
import users from './User';
import posts from './Posts'
import todos from './Todo';
 const reducer = combineReducers({
    users,
    posts,
    todos,
});
export default reducer;