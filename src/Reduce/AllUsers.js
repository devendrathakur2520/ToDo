import { Users,AddUsers,Posts,Todos,Edit,Id, } from "../Action";
 const initialState={
     
     todos:[ ],
     allusr:[ ],
     posts:[ ],
     addusr:[ ],
     id:{},
     name:{ },
     email:{ }
     
 }
 export default function users (state = initialState, action) {
    switch (action.type) {
      case Users:
        return {
          ...state,
          allusr: action.payload,
        };
      case AddUsers:
        return {
          ...state,
          AddUser: action.payload,
        };
      case Posts:
        return {
          ...state,
          posts: action.payload,
        };
        case Todos:
        return {
          ...state,
          todos: action.payload,
        };
        case Edit:
        return {
          ...state,
          Edit: action.payload,
        };
        case Id:
            return {
              ...state,
              Id: action.payload,
            }; case Name:
            return {
              ...state,
              Name: action.payload,
            }; case Email:
            return {
              ...state,
              email: action.payload,
            };
      default:
        return state;
    }
  }
 
  