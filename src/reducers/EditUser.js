
import { EDIT_USER } from "../action";
const initialState = {
    edituser:{
        name: "",
        username: "",
        email: "",
        phone: ""
    }
        
    
}
const editUsers =(state=initialState,action)=>{
    switch (action.type) {
        case EDIT_USER:
            return {
                ...state,
        edituser: action.payload,
            };
            default:
                return state;
        
    }
}
export default editUsers;