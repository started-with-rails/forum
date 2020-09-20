import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Menu extends Component {
  render(){
  let isloggedIn;
  // console.log(this.props.response.authentication)
  return (
  <div id="nav">
    <div id="nav_in">
      <div id="main-menu" className="menu menu-secondary">
        <div id="menu-button">Menu</div>
        <div className="menu-menu-container">
          <ul id="menu-menu" className="menu" style={{display: "none"}}>
            <li className="menu-item  current-menu-item  menu-item-home"><Link to="/">Home</Link> </li>
            <li  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-82"><Link to="/questions">Questions</Link> </li>
            <li  className="menu-item menu-item-type-custom menu-item-object-custom"><Link to="/ask-question">Ask a Question</Link> </li>
            <li id="menu-item-139" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-139 has-sub"><span className="submenu-button"></span><a href="#">More</a>
              <ul className="sub-menu" style={{display: "none"}}>
                <li id="menu-item-80" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-80"><Link to="about/">About</Link> </li>
              </ul>
            </li>
            <li  className="menu-item menu-item-type-custom menu-item-object-custom"><Link to="/login">Sign In</Link> </li>
            <li  className="menu-item menu-item-type-custom menu-item-object-custom"><Link to="/login">Sign Out</Link> </li>
          </ul>
        </div>
      </div>
      <div className="search">
        <form method="get" id="searchform" action="https://demo.templatic.com/answers">
          <input type="text" value="Find a Question" name="s" id="s" className="textfield"  />
          <input type="image" className="b_search" src="https://demo.templatic.com/answers/wp-content/themes/Answers/images/b_search.png" alt="Submit button" />
        </form>
      </div>
    </div>
  </div>
  )
}

}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(Menu);
