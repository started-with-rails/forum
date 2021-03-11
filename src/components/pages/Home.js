import React,{useEffect} from 'react'
import {connect,useSelector} from 'react-redux';
import Tabs from './partials/Tabs.js'
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'
import Pagination from './partials/Pagination';
import queryString from 'query-string'
import { GetQuestions } from '../../redux/actions/actions';


const Home = (props) => {
  let questions = useSelector(state => state.questions.questions)
  
  useEffect(() => {
    let params = queryString.parse(props.location.search);
    props.get_questions(params.type);
  }, []);

  const clickMe = (type) => (event) => {
    event.preventDefault();
    props.get_questions(type);
  }

  return(
  <div id="wrapper">
    <div id="content">
      <Tabs clickMe={clickMe}/>
      {questions.length > 0 ? questions.map(question => 
        <QuestionList key={question.id} question = {question} />
      ): ''}
      <Pagination />
    </div>
    <HomeSideBar />
  </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return {
    get_questions: (type)=> dispatch(GetQuestions(type))
  }
}

export default connect(null,mapDispatchToProps)(Home)