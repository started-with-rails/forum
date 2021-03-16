import React, {useState} from 'react'
import {connect,useSelector} from 'react-redux';
import { HandleLogin,HandleLogout } from '../../../redux/actions/actions'

const LoginWidget = (props) => {
  
  let isloggedIn = useSelector(state=>state.users.isloggedIn)
  let token = useSelector(state=>state.users.token)
  let user = useSelector(state=>state.users.user)


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [token, setToken] = useState("")

  const handleUsernameChange = (evt) => {
      setUsername(evt.target.value)
  }

  const handlePasswordChange = (evt) => {
      setPassword(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(username && password){
      props.handleLogin({username: username,password: password})
      setUsername('');
      setPassword('');
    }
  }

  const handleClick = (evt) => {
    props.handleLogout()
  }
  
  {
    if (isloggedIn && token) {
      return(
        <div className="widget login_widget">
            <h3>Hi {user.username}</h3>
            <p>Not you..?</p>
            <button type="submit" className="btn_input_highlight" onClick={handleClick}>Log Out </button>
        </div>
        )
    } else {
      return(
        <div className="widget login_widget">
          <h3>Login </h3>
          <form name="loginform" id="loginform" onSubmit={handleSubmit}>
            <div className="form_row">
              <label>User Name <span>*</span></label>
              <input name="username" id="user_login1" type="text" className="textfield" value={username} onChange={handleUsernameChange} required/> <span id="user_loginInfo"></span> </div>
            <div className="form_row">
              <label>Password <span>*</span></label>
              <input name="password" id="user_pass1" type="password" className="textfield" value={password} onChange={handlePasswordChange} required/><span id="user_passInfo"></span> </div>
            <input type="submit" name="submit" value="Sign In" className="btn_input_highlight" />
          </form>
        </div>
        )
    }
  }
 
}

const mapDispatchToProps=(dispatch)=>{
  return {
    handleLogin: (data)=> dispatch(HandleLogin(data)),
    handleLogout: ()=> dispatch(HandleLogout())

  }
}

export default connect(null,mapDispatchToProps)(LoginWidget)