import React from 'react';
import LoginWidget from '../widgets/LoginWidget'
import TextWidget from '../widgets/TextWidget'
import CategoryWidget from '../widgets/CategoryWidget'
import SearchWidget from '../widgets/SearchWidget'
import TopUsersWidget from '../widgets/TopUsersWidget'

function HomeSideBar(){
  return(
    <div id="sidebar" className="sidebar_spacer">
      <a href="https://demo.templatic.com/answers?ptype=ask-a-question" className="b_askquestions">Ask a Question</a>
      <LoginWidget />
      <TextWidget />
      <CategoryWidget />
      <SearchWidget />
      <TopUsersWidget />
    </div>
  )
}

export default  HomeSideBar;