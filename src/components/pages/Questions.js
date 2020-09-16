import React from 'react'
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'
import Pagination from './partials/Pagination'

function Questions() {
    return(
    <div id="wrapper">
      <div id="content">
        <h1 class="page_head">Questions </h1>
        <div class="breadcrumbs">
          <p><a href="https://demo.templatic.com/answers">Home</a> » Questions</p>
        </div>
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
export default Questions;