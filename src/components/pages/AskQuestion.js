import React from 'react'
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'
import Pagination from './partials/Pagination'

function AskQuestion() {
    return(
    <div id="wrapper">
      <div id="content">
        <h1 class="page_head">Ask a Question </h1>
        <div class="breadcrumbs">
          <p><a href="https://demo.templatic.com/answers">Home</a> » Ask a Question</p>
        </div>
        <div class="entry">
          <div class="info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent aliquam, justo convallis luctus rutrum, erat nulla fermentum diam, at nonummy quam ante ac quam. Maecenas urna purus, fermentum id, molestie in, commodo porttitor, felis. Nam blandit quam ut lacus. </p>
          </div>
        </div>
        <form name="questionform" id="questionform" action="#" method="post" enctype="multipart/form-data">
          <div class="ask_row">
            <label> Title : <span class="indicates">*</span></label>
            <input name="post_title" id="post_title" type="text" class="textfield" value="" /> <span class="message_error" id="post_title_span"></span> <span class="notice"> please enter a descriptive title for your question </span> </div>
          <div class="ask_row">
            <label> Description : </label>
            <div id="wp-post_desc-wrap" class="wp-core-ui wp-editor-wrap tmce-active"> </div>
          </div>
          <div class="ask_row">
            <label> Tags : </label>
            <input name="post_tags" id="post_tags" type="text" class="textfield textfield_tags" value="" /> <span class="notice">  Tags are short keywords, with no space within. Up to five tags can be used. More than five tags will removed automatically. </span> </div>
          <input name="submit" type="submit" id="submit" class="b_spacer3" value="Submit" />
        </form>
      </div>
      <HomeSideBar />
    </div>
    )
}
export default AskQuestion;