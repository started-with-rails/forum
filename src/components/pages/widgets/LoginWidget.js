import React from 'react';

function LoginWidget(){
  return(
  <div className="widget login_widget">
    <h3>Login </h3>
    <form name="loginform" id="loginform" action="#" method="post">
      <div className="form_row">
        <label>User Name <span>*</span></label>
        <input name="log" id="user_login1" type="text" className="textfield" /> <span id="user_loginInfo"></span> </div>
      <div className="form_row">
        <label>Password <span>*</span></label>
        <input name="pwd" id="user_pass1" type="password" className="textfield" /><span id="user_passInfo"></span> </div>
      <input type="hidden" name="redirect_to" value="" />
      <input type="hidden" name="testcookie" value="1" />
      <input type="submit" name="submit" value="Sign In" className="btn_input_highlight" />
    </form>
  </div>
  )
}

export default  LoginWidget;