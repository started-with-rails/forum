
import {LOGIN_USER,LOGOUT_USER,REGISTER_USER} from '../actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        loggedIn: true,
        user: action.user
      };
    case REGISTER_USER:
      return {};
    case LOGOUT_USER:
      return {};
    default:
      return state
  }
}