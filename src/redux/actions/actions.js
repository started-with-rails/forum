import { FETCH_DATA,FETCH_ALL,FETCH_FAIL,FETCH_ONE } from "../actions/actionTypes";
import API from '../../services/api';

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

export const fetchFail=(error)=>{
  return {
    type:FETCH_FAIL,
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
      dispatch(fetchFail(error))
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
      dispatch(fetchFail(error))
    })
  }
}