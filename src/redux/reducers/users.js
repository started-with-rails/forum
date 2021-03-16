import {REQ_ERR,SET_TOKEN,REMOVE_TOKEN,SET_USER } from "../actions/actionTypes";

const initialState={
  isloggedIn: false,
  user: {},
  token: '',
}

const usersReducer = (state=initialState,action)=>{
  switch(action.type){
    case SET_TOKEN:
        return { isloggedIn:true, token: action.data.auth_token, user: action.data.user }
    case SET_USER:
      return { user: action.data.user, isloggedIn:true, token: action.data.auth_token }
    case REMOVE_TOKEN:
        return { isloggedIn:false, user: {}, token: '' }
    case REQ_ERR:
      return { isloggedIn:false, user: {}, token: '', error: action.data}
    default:
      return state;
  }
}
export default usersReducer;