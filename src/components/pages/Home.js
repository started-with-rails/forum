import React,{useEffect,useState} from 'react'
import {connect,useSelector} from 'react-redux';
import Tabs from './partials/Tabs.js'
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'
import Pagination from './partials/Pagination';
import queryString from 'query-string'
import { GetQuestions,GetCategories } from '../../redux/actions/actions';


const Home = (props) => {

  const [type,  setType]  = useState('recent');
  const [category,  setCategory]  = useState();

  let questions = useSelector(state => state.questions.questions)
  let categories = useSelector(state => state.categories.categories)
  
  useEffect(() => {
    let params = queryString.parse(props.location.search);
    let category = props.match.params.id;
    setCategory(category);
    props.get_questions(category,params.type);
    props.get_categories();
  }, []);

  const clickMe = (type) => (event) => {
    event.preventDefault();
    props.get_questions(category,type);
    setType(type);
  }

  
  return(
  <div id="wrapper">
    <div id="content">
      <Tabs clickMe={clickMe} type={type}/>
     
      <Pagination
        data={questions}
        RenderComponent={QuestionList}
        title="QuestionList"
        pageLimit={5}
        dataLimit={10}
      />
    </div>
    <HomeSideBar categories={categories}/>
  </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return {
    get_questions: (category,type)=> dispatch(GetQuestions(category,type)),
    get_categories: ()=> dispatch(GetCategories())
  }
}

export default connect(null,mapDispatchToProps)(Home)