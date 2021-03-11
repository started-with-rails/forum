import React from 'react'
import HomeSideBar from './partials/HomeSideBar.js'

function AskQuestion() {
    return(
    <div id="wrapper">
      <div id="content">
        <h1 className="page_head">Ask a Question </h1>
        <div className="breadcrumbs">
          <p><a href="https://demo.templatic.com/answers">Home</a> » Ask a Question</p>
        </div>
        <div className="entry">
          <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent aliquam, justo convallis luctus rutrum, erat nulla fermentum diam, at nonummy quam ante ac quam. Maecenas urna purus, fermentum id, molestie in, commodo porttitor, felis. Nam blandit quam ut lacus. </p>
          </div>
        </div>
        <form name="questionform" id="questionform" action="#" method="post" enctype="multipart/form-data">
          <div className="ask_row">
            <label> Title : <span className="indicates">*</span></label>
            <input name="post_title" id="post_title" type="text" className="textfield" value="" /> <span className="message_error" id="post_title_span"></span> <span className="notice"> please enter a descriptive title for your question </span> </div>
          <div className="ask_row">
            <label> Description : </label>
            <div id="wp-post_desc-wrap" className="wp-core-ui wp-editor-wrap tmce-active"> </div>
          </div>
          <div className="ask_row">
            <label> Tags : </label>
            <input name="post_tags" id="post_tags" type="text" className="textfield textfield_tags" value="" /> <span className="notice">  Tags are short keywords, with no space within. Up to five tags can be used. More than five tags will removed automatically. </span> </div>
          <input name="submit" type="submit" id="submit" className="b_spacer3" value="Submit" />
        </form>
      </div>
      <HomeSideBar />
    </div>
    )
}
export default AskQuestion;