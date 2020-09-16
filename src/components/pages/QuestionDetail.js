import React from 'react'
import HomeSideBar from './partials/HomeSideBar.js'
import Answers from './partials/Answers.js'
import AnswerQuestion from './partials/AnswerQuestion.js'


function QuestionDetail() {
    return(
    <div id="wrapper">
      <div id="content">
        <div class="posts">
          <div class="question_list"> <span class="answers_total">
            <a href="https://demo.templatic.com/answers/why-am-i-created-like-this-flat-and-skinny/#commentarea">14 </a>   Answers 
            </span>
            <h1> Why am i created like this, flat and skinny</h1>
            <p> <span class="user">Asked by: <strong><a href="https://demo.templatic.com/answers/author/joseph/" title="Posts by joseph" rel="author">joseph</a></strong> </span> <span class="views"><b>1558</b> views</span> <span class="ptags"><a href="https://demo.templatic.com/answers/tag/flat-and-skinny/" rel="tag">flat and skinny</a><br/> </span> <span class="pcate">  <a href="https://demo.templatic.com/answers/category/questions/" rel="category tag">Questions</a> </span> </p>
          </div>
          <div class="question-desc">
            <p>This is a post description section where you can write about your listing. We have provided an editor for entering this information on Submit listing page so your visitors will be able to format their description easily. They can highlight their content with <strong>Bold</strong>, <em>Italic</em>, <span style={{textDecoration: "underline"}}>Underline</span> options, they can also use ordered and un-ordered lists:</p>
            <p><strong>Ordered list:</strong></p>
            <ol>
              <li><span style={{lineHeight: "13px"}}>Allow users to publish their posts on your site</span></li>
              <li>You can also add media or attachment</li>
              <li>You can use shortcodes</li>
            </ol>
            <p><strong>Unordered list:</strong></p>
            <ul>
              <li><span style={{lineHeight: "13px"}}>Allow users to publish their posts on your site</span></li>
              <li>You can also add media or attachment</li>
              <li>You can use shortcodes</li>
            </ul>
            <p><a title="link" href="http://templatic.com" target="_blank">Hyperlinks</a>, images and basic HTML can also be added here from backend.</p>
          </div>
        </div>
        <div id="comments"> 
          <Answers />
          <AnswerQuestion />
        </div>
      </div>
      <HomeSideBar />
    </div>
    )
}
export default QuestionDetail;