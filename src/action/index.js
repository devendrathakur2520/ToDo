export const GET_USER ="GET_USER";
export const GET_POST ="GET_POST";
export const GET_TODO ="GET_TODO";

export const getUser = (payload) =>({type: "GET_USER",payload});

export const getPost = (payload) =>({type: "GET_POST",payload});

export const getTodo=(payload) =>({type: "GET_TODO",payload});