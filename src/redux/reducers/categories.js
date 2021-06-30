import { CATEGORY_LOAD,FETCH_CATEGORIES,FETCH_CATEGORY } from "../actions/actionTypes";

const initialState={
  categories:[],
  category: {},
  error:'',
  isLoading:false
}

const categoriesReducer = (state=initialState,action)=>{
  switch(action.type){
    case CATEGORY_LOAD:
      return {...state,isLoading:true}
    case FETCH_CATEGORIES:
      return {isLoading:false, categories: action.data, error:''}
    case FETCH_CATEGORY:
        return {isLoading:false, category: action.data, error:''}
    // case REQ_ERR:
    //   return {isLoading:false, categories:[], category: {},  error:action.data}
    default:
      return state;
  }
}
export default categoriesReducer;