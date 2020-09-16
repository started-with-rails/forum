import React from 'react'
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'



function Author() {
    return(
    <div id="wrapper">
      <div id="content">
        <div class="agent_details_main clearfix">
          <div class="author_photo"><img name="user_photo" class="agent_photo" id="user_photo" src="https://demo.templatic.com/answers/wp-content/uploads/users/20161213110410_janiffer-150X150.jpg" width="150" height="150" /></div>
          <div class="agent_biodata">
            <h3>admin</h3>
            <p class="agent_links clearfix"> <a href="http://templatic.com">Visit Website </a> </p>
            <p class="propertylistinglinks clearfix"> <span class="i_agent_others"><a href="https://demo.templatic.com/answers/author/admin/">Questions Asked : <b>1</b></a></span> <span class="answers_provider"><a href="https://demo.templatic.com/answers/?ptype=author_answers&amp;uid=1">Answers provided : <b>0 </b></a></span> <span class="earn_point">Received Votes&nbsp;&nbsp;: <b>0</b></span> </p>
            <p> Your profile description goes here. It can be edited from edit profile link in your dashboard. </p>
          </div>
        </div>
        <p>&nbsp;</p>
        <ul class="user_tab clearfix">
          <li class="page_item "><a href="https://demo.templatic.com/answers/author/admin/">Questions Asked</a></li>
          <li class="page_item  "><a href="https://demo.templatic.com/answers/?ptype=author_answers&amp;uid=1">Answers Provided</a></li>
        </ul>
        <QuestionList />
      </div>
      <HomeSideBar />
    </div>
    )
}
export default Author;