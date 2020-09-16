import React from 'react';

function Menu() {
  return(
  <div id="nav">
    <div id="nav_in">
      <div id="main-menu" className="menu menu-secondary">
        <div id="menu-button">Menu</div>
        <div className="menu-menu-container">
          <ul id="menu-menu" className="menu" style={{display: "none"}}>
            <li id="menu-item-81" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-81"><a href="https://demo.templatic.com/answers/">Home</a> </li>
            <li id="menu-item-139" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-139 has-sub"><span className="submenu-button"></span><a href="#">Pages</a>
              <ul className="sub-menu" style={{display: "none"}}>
                <li id="menu-item-80" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-80"><a href="https://demo.templatic.com/answers/about/">About</a> </li>
                <li id="menu-item-140" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140"><a href="https://demo.templatic.com/answers/sample-page/">Sample Page</a> </li>
                <li id="menu-item-85" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85"><a href="https://demo.templatic.com/answers/site-map/">Site Map</a> </li>
                <li id="menu-item-143" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"><a href="https://demo.templatic.com/answers/archive-page/">Archive Page</a> </li>
                <li id="menu-item-146" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-146"><a href="https://demo.templatic.com/answers/contact-us/">Contact Us</a> </li>
                <li id="menu-item-150" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-150"><a href="https://demo.templatic.com/answers/author/admin/">Author Page</a> </li>
              </ul>
            </li>
            <li id="menu-item-82" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-82"><a href="https://demo.templatic.com/answers/category/questions/">Questions</a> </li>
            <li id="menu-item-86" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-86"><a href="https://demo.templatic.com/answers/?ptype=ask-a-question">Ask a Question</a> </li>
            <li id="menu-item-83" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-83 has-sub"><span className="submenu-button"></span><a href="https://demo.templatic.com/answers/category/blog/">Blog</a>
              <ul className="sub-menu" style={{display: "none"}}>
                <li id="menu-item-155" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-155"><a href="https://demo.templatic.com/answers/category/questions/">Questions</a> </li>
                <li id="menu-item-138" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-138"><a href="https://demo.templatic.com/answers/where-can-i-find-a-good-free-work-out/">Post Detail Page</a> </li>
              </ul>
            </li>
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
export default Menu;