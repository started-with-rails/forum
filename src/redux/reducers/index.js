import { combineReducers } from "redux";
import questions from './questions';
import categories from './categories';
import users from './users';


export default combineReducers({ questions, users, categories });