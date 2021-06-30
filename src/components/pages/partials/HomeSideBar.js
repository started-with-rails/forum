import React from 'react';
import LoginWidget from '../widgets/LoginWidget'
import TextWidget from '../widgets/TextWidget'
import CategoryWidget from '../widgets/CategoryWidget'
import SearchWidget from '../widgets/SearchWidget'
import TopUsersWidget from '../widgets/TopUsersWidget'

function HomeSideBar({categories}){
  return(
    <div id="sidebar" className="sidebar_spacer">
      <a href="#" className="b_askquestions">Ask a Question</a>
      <LoginWidget />
      <CategoryWidget categories={categories} />
      <SearchWidget />
      <TopUsersWidget />
    </div>
  )
}

export default  HomeSideBar;