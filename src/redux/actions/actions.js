import { FETCH_DATA,FETCH_ALL,FETCH_ONE,SET_TOKEN,REQ_ERR,REMOVE_TOKEN,SET_USER } from "../actions/actionTypes";
import API from '../../services/api';



export const getToken=(data)=>{
  return {
    type: SET_TOKEN,
    data: data
  }
}

export const clearToken=(data)=>{
  return {
    type: REMOVE_TOKEN,
    token: data
  }
}

export const setUser=(data)=>{
  return {
    type: SET_USER,
    data: data
  }
}

export const fetchQuestions=()=>{
  return {
    type:FETCH_DATA
  }
}
export const fetchQuestion=()=>{
  return {
    type:FETCH_DATA
  }
}

export const fetchAll=(data)=>{
  return {
    type: FETCH_ALL,
    data: data
  }
}

export const fetchOne=(data)=>{
  return {
    type: FETCH_ONE,
    data: data
  }
}

export const requestError=(error)=>{
  return {
    type: REQ_ERR,
    data: error
  }
}

export const GetQuestions = (type)=>{
  return function(dispatch){
    dispatch(fetchQuestions());
    API.get(`/questions.json?type=${type}`)
    .then(response=>{
      dispatch(fetchAll(response.data))
    })
    .catch(error=>{
      dispatch(requestError(error))
    })
  }
}

export const ShowQuestion = (id)=>{
  return function(dispatch){
    dispatch(fetchQuestion());
    API.get(`/questions/${id}.json`)
    .then(response=>{
      dispatch(fetchOne(response.data))
    })
    .catch(error=>{
      dispatch(requestError(error))
    })
  }
}

export const HandleLogin = (data) => {
  return function(dispatch){
    API.post(`/authenticate.json`,data)
    .then(response=>{
      dispatch(getToken(response.data));
      localStorage.setItem("token", response.data.auth_token);
      API.defaults.headers.common['Authorization'] = `${response.data.auth_token}`;
    })
    .catch(error=>{
      dispatch(requestError(error))
    })
  }
}

export const HandleLogout =() => {
  return function(dispatch){
  dispatch(clearToken());
  localStorage.removeItem("token");
  }
}

export const setToken =(token) => {
  return function(dispatch){
    dispatch(getToken(token));
  }
}

export const GetUser = () => {
  return function(dispatch){
    API.get(`/authorize_token.json`)
    .then(response=>{
      dispatch(setUser(response.data));
    })
    .catch(error=>{
      dispatch(requestError(error))
    })
  }
}
