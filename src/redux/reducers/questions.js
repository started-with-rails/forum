import { FETCH_DATA,FETCH_ALL,REQ_ERR,FETCH_ONE } from "../actions/actionTypes";

const initialState={
  questions:[],
  question: {},
  error:'',
  isLoading:false
}

const questionsReducer = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_DATA:
      return {...state,isLoading:true}
    case FETCH_ALL:
      return {isLoading:false, questions: action.data, error:''}
    case FETCH_ONE:
        return {isLoading:false, question: action.data, error:''}
    // case REQ_ERR:
    //   return {isLoading:false, questions:[], question: {},  error:action.data}
    default:
      return state;
  }
}
export default questionsReducer;