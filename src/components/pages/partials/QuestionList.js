import React from 'react'

function QuestionList() {
    return(
    <div className="question_list"> <span className="answers_total">
      <a href="https://demo.templatic.com/answers/how-to-get/#commentarea">0 </a>   Answers 
      </span>
      <h3> <a href="https://demo.templatic.com/answers/how-to-get/" rel="bookmark" title="Permanent Link to How to get&amp;">How to get&amp;</a></h3>
      <p> 
        <span className="user">Asked by: <strong>
          <a href="https://demo.templatic.com/answers/author/nomad/" title="Posts by Nomad" rel="author">Nomad</a></strong>
        </span>
        <span className="views"><b>100 </b> views 
        </span> 
        <span className="ptags">
          <a href="https://demo.templatic.com/answers/tag/10/" rel="tag">10</a><br/>
        </span>
        <span className="pcate">
          <a href="https://demo.templatic.com/answers/category/uncategorized/" rel="category tag">Uncategorized</a>
        </span>
      </p>
    </div>
    )
}
export default QuestionList;