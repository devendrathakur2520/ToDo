import { GET_COMMENTS } from "../action";
const initialState = {
    comment:[ ]
}
const comments =(state=initialState,action)=>{
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
        comment: action.payload,
            };
            default:
                return state;
        
    }
}
export default comments;