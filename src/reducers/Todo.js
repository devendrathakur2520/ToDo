import { GET_TODO } from "../action";
const initialState = {
        todo:[ ]
}
const todos =(state=initialState,action)=>{
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todo: action.payload,
            };
            default:
                return state;
        
    }
}
export default todos;