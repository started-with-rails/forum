import React, {useState, useEffect} from 'react'
import HomeSideBar from './partials/HomeSideBar.js'
import Answers from './partials/Answers.js'
import AnswerQuestion from './partials/AnswerQuestion.js'
import API from '../../services/api';


const QuestionDetail = (props) => {

  const [question, setQuestion] = useState({});
  const [answers,  setAnswers]  = useState([]);

  useEffect(() => {
    let id = props.match.params.id;

    API.get(`/questions/${id}.json`)
    .then(response=>{
      setQuestion(response.data);
    }).catch(error => console.log(error));

    API.get(`/questions/${id}/answers.json`)
    .then(response=>{
      setAnswers(response.data)
    }).catch(error => console.log(error));

  },[]);


    return(
      <div id="wrapper">
        <div id="content">
          <div className="posts">
            <div className="question_list"> <span className="answers_total">
              <a href="https://demo.templatic.com/answers/why-am-i-created-like-this-flat-and-skinny/#commentarea">{question.answers_count} </a>   Answers 
              </span>
              <h1> { question.title} </h1>
              <p> <span className="user">Asked by: <strong><a href="https://demo.templatic.com/answers/author/joseph/" title="Posts by joseph" rel="author">{question.asked_by}</a></strong> </span> <span className="views"><b>1558</b> views</span> <span className="ptags"><a href="https://demo.templatic.com/answers/tag/flat-and-skinny/" rel="tag">{question.tag_list}</a><br/> </span> <span className="pcate">  <a href="https://demo.templatic.com/answers/category/questions/" rel="category tag">Questions</a> </span> </p>
            </div>
            <div className="question-desc">
              {question.description}
            </div>
          </div>
          <div id="comments"> 
          <div id="comments_wrap">
            <h3>{question.answers_count} Answers </h3>
            { answers.map(answer =>  <Answers key={answer.id} answer={answer} />)}
          </div>
          <AnswerQuestion />
          </div>
        </div>
        <HomeSideBar />
      </div> 
    )
}

export default QuestionDetail