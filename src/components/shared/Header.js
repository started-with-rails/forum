import React from 'react'
import logo  from '../../img/logo.png'
import advt  from '../../img/advt.png'

function Header() {
    return(
      <div id="header">
        <div id="header_in" className="clearfix">
          <div className="logo">
            <a href="https://demo.templatic.com/answers/">
              <img src={logo} alt="Answers" />
            </a>
          </div>
          <div className="header_right">
            <a href="http://templatic.com">
              <img src={advt} alt="" width="460" height="68" />
            </a>
          </div> 
          <a className="mobile-ask-que" href="#">
            <i className="fa fa-plus-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    )
}
export default Header;