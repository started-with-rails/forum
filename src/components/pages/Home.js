import React from 'react'
import Tabs from './partials/Tabs.js'
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'
import Pagination from './partials/Pagination'

function Home() {
    return(
    <div id="wrapper">
      <div id="content">
        <Tabs />
        <QuestionList />
        <QuestionList />
        <QuestionList />
        <QuestionList />
        <QuestionList />
        <Pagination />
      </div>
      <HomeSideBar />
    </div>
    )
}
export default Home;