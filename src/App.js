import React, {useEffect } from 'react';
import { Router } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import history from './services/history';
import Routes from '../src/routes'
import {connect,useSelector} from 'react-redux';
import { setToken,GetUser,clearToken } from './redux/actions/actions'
import API from './services/api'



const App = (props)  => {

   let user = useSelector(state => state.users.user)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      API.defaults.headers.common['Authorization'] = `${token}`;
      props.getuser();
      if(user){
        props.settoken(token)
      }else{
        props.cleartoken()
      }
    }
  }, [])


    return (
      <div className="App">
        <Header />
        <Router history={history}>
          <Routes />
        </Router>
        <Footer />
      </div>
    );
}

const mapDispatchToProps=(dispatch)=>{
  return {
    settoken: (token)=> dispatch(setToken(token)),
    getuser: ()=> dispatch(GetUser()),
    cleartoken: ()=> dispatch(clearToken())
  }
}

export default connect(null,mapDispatchToProps)(App)