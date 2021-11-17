import { GET_POST } from "../action";
const initialState = {
    post:[ ]
}
const posts =(state=initialState,action)=>{
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                post: action.payload,
            };
            default:
                return state;
        
    }
}
export default posts;