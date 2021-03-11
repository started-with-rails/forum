import React, { Component } from 'react';
import HomeSideBar from './partials/HomeSideBar.js'
import QuestionList from './partials/QuestionList'
import Pagination from './partials/Pagination'
import { connect } from "react-redux";
import { GetQuestions } from '../../redux/actions/actions';

export class Questions extends Component {
 
  componentDidMount() {
    this.props.get_questions();
  }

  render() {
    return(
    <div id="wrapper">
      <div id="content">
        <h1 className="page_head">Questions </h1>
        <div className="breadcrumbs">
          <p><a href="https://demo.templatic.com/answers">Home</a> » Questions</p>
        </div>
        {this.props.questions.map(question => 
          <QuestionList key={question.id} question = {question} />
        )}
        <Pagination />
      </div>
      <HomeSideBar />
    </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    questions: state.questions.questions
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    get_questions: ()=> dispatch(GetQuestions())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Questions)
