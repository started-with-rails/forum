import React,{useEffect,useState} from 'react'
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'
import Pagination from './partials/Pagination'
import {connect,useSelector} from 'react-redux';
import { GetQuestions,GetCategories } from '../../redux/actions/actions';

const Questions = (props) => {
 
  let questions = useSelector(state => state.questions.questions)
  let categories = useSelector(state => state.categories.categories)
  const [category,  setCategory]  = useState();
  const [tag,  setTag]  = useState();

  useEffect(() => {
    let category = props.match.params.category;
    let tag = props.match.params.tag;
    setCategory(category);
    setTag(tag);
    props.get_questions(category,tag,'recent');
    props.get_categories();
  }, []);
  

   return(
    <div id="wrapper">
      <div id="content">
        <h1 className="page_head">Questions </h1>

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
const mapStateToProps = (state)=>{
  return {
    questions: state.questions.questions
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    get_questions: (category,tag,type)=> dispatch(GetQuestions(category,tag,type)),
    get_categories: ()=> dispatch(GetCategories())

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Questions)
