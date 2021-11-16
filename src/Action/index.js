export const USERS='USERS';
export const ADDUSERS='ADDUSERS';
export const POSTS='POSTS';
export const EDIT='EDIT';



export const Users =(payload)=>{
    return { type:"USERS",payload }};


export const AddUsers =()=>{
        return {type:"ADDUSERS"}};

export const Posts =()=>{
        return {type:"POSTS"}};

 export const Todos =()=>{
        return {type:"TODOS"}};

    
export const Edit=()=>{
        return {type:"EDIT"}};
