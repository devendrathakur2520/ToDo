import { ADD_USER } from "../action";

const initialState = {
    adduser:{
        name: "",
        username: "",
        email: "",
        phone: ""
    },
      
    
}
const addUsers =(state=initialState,action)=>{
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                adduser: action.payload,
                   }
     
            default:
                return state;
        
    }
}
export default addUsers;