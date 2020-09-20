import API from '../api';

export const AuthenticationService = {
  login,
  logout,
  register
};

function login(user) {
  return API.post(`login`, { user })
  .then(res => {
    localStorage.setItem('user', JSON.stringify(res.data.user));
    return res.data.user;
  })
}

function register(user) {
  
}

function logout() {
  return API.delete(`logout`)
  .then(res => {
    localStorage.removeItem('user');
    return {}
  })

  
}