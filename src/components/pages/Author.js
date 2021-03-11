import React from 'react'
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'



function Author() {
    return(
    <div id="wrapper">
      <div id="content">
        <div className="agent_details_main clearfix">
          <div className="author_photo"><img name="user_photo" className="agent_photo" id="user_photo" src="https://demo.templatic.com/answers/wp-content/uploads/users/20161213110410_janiffer-150X150.jpg" width="150" height="150" /></div>
          <div className="agent_biodata">
            <h3>admin</h3>
            <p className="agent_links clearfix"> <a href="http://templatic.com">Visit Website </a> </p>
            <p className="propertylistinglinks clearfix"> <span className="i_agent_others"><a href="https://demo.templatic.com/answers/author/admin/">Questions Asked : <b>1</b></a></span> <span className="answers_provider"><a href="https://demo.templatic.com/answers/?ptype=author_answers&amp;uid=1">Answers provided : <b>0 </b></a></span> <span className="earn_point">Received Votes&nbsp;&nbsp;: <b>0</b></span> </p>
            <p> Your profile description goes here. It can be edited from edit profile link in your dashboard. </p>
          </div>
        </div>
        <p>&nbsp;</p>
        <ul className="user_tab clearfix">
          <li className="page_item "><a href="https://demo.templatic.com/answers/author/admin/">Questions Asked</a></li>
          <li className="page_item  "><a href="https://demo.templatic.com/answers/?ptype=author_answers&amp;uid=1">Answers Provided</a></li>
        </ul>
        <QuestionList />
      </div>
      <HomeSideBar />
    </div>
    )
}
export default Author;