import React, { Component } from 'react'
import HomeSideBar from './partials/HomeSideBar.js'
import {connect} from 'react-redux';
import {authActions} from '../../actions/authentication.action';

class Login extends Component {


  componentDidMount(){
    this.props.LogOut();
  }

  state = { email: '', password: '', submitted: false}

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const user = {
      email: email,
      password: password
    }
    if (email && password) {
        this.props.LogIn(user);
    }
  }


  render() {
    const { email, password, submitted } = this.state;
    return  <div id="wrapper">
      <div id="content">
        <h1 className="page_head">Sign In</h1>
        <div className="breadcrumbs"></div>
        <div className="login_form">
            <div className="login_content">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent aliquam,  justo convallis luctus rutrum, erat nulla fermentum diam, at nonummy quam  ante ac quam. Maecenas urna purus, fermentum id, molestie in, commodo  porttitor, felis. Nam blandit quam ut lacus.</p>
            </div>
            <div className="login_form_box">
              <form name="loginform" onSubmit={this.onFormSubmit}>
                  <div className="form_row clearfix">
                    <label>Email <span>*</span> </label>
                    <input type="text" name="email" className="textfield"  onChange={this.handleChange} value={this.state.email} />
                    {submitted && !email &&
                            <div className="help-block">Email is required</div>
                    }
                  </div>
                  <div className="form_row clearfix">
                    <label>
                    Password <span>*</span>
                    </label>
                    <input type="password" name="password"  className="textfield"  onChange={this.handleChange} value={this.state.password} />
                    {submitted && !password &&
                            <div className="help-block">Password is required</div>
                    }
                  </div>
                  <p className="rember">
                    <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                    Remember me on this computer  
                  </p>
                  <input class="btn_input_highlight btn_spacer" type="submit" value="Sign In" name="submit" />
                  <a href="/forget">Forgot Password?</a> 
                  <p> </p>
              </form>
            </div>
        </div>
      </div>
      <HomeSideBar />
    </div>
  }
}


function mapDispatchToProps(dispatch) {
  return {
    LogIn: user => dispatch(authActions.login(user)),
    LogOut: user => dispatch(authActions.logout())
  };
}

export default connect(null, mapDispatchToProps)(Login);