import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actionTypes";
import { AuthenticationService } from '../services/authentication.service'
import history from '../services/history';


export const authActions = {
  login,
  logout,
  register
};


function login(user) {
  return dispatch => {
    AuthenticationService.login(user)
    .then(
        user => { 
          return { type: LOGIN_USER, user }
          history.push('/');
        },
        error => {
          return { type: LOGOUT_USER }
            // dispatch(failure(error));
            // dispatch(alertActions.error(error));
        }
    );
  }
}

function logout() {
 
  AuthenticationService.logout();
  return { type: LOGOUT_USER };
}

function register(){

}