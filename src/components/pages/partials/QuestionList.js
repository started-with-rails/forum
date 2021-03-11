import React from 'react'

function QuestionList({question}) {
    return(
    <div className="question_list"> <span className="answers_total">
      <a href="https://demo.templatic.com/answers/how-to-get/#commentarea"> {question.answers_count} </a>   Answers 
      </span>
      <h3> <a href={`/questions/${question.id}`} rel="bookmark" title="Permanent Link to How to get&amp;">{question.title}</a></h3>
      <p> 
        <span className="user">Asked by: <strong>
          <a href="" title="Posts by Nomad" rel="author">{question.asked_by}</a></strong>
        </span>
        <span className="views"><b>100 </b> views 
        </span> 
        <span className="ptags">
          <a href="" rel="tag"> {question.tag_list }</a><br/>
        </span>
        <span className="pcate">
          <a href="" rel="category tag">Uncategorized</a>
        </span>
      </p>
    </div>
    )
}
QuestionList.defaultProps = {
  question: {
    id: 0,
    title: '',
    answers_count: 0,
    asked_by: '',
    tag_list: []
  }
};

export default QuestionList;