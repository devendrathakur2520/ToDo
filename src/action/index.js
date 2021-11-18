export const GET_USER ="GET_USER";
export const GET_POST ="GET_POST";
export const GET_TODO ="GET_TODO";
export const GET_COMMENTS ="GET_COMMENTS";
export const ADD_USER ="ADD_USER";
export const EDIT_USER ="EDIT_USER";

export const getUser = (payload) =>({type: "GET_USER",payload});

export const getPost = (payload) =>({type: "GET_POST",payload});

export const getTodo=(payload) =>({type: "GET_TODO",payload});

export const getComments=(payload) =>({type: "GET_COMMENTS",payload})

export const addUser=(payload) =>({type: "ADD_USER",payload});

export const editUser=(payload) =>({type: "EDIT_USER",payload})

