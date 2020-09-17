import React from "react";
import { BrowserRouter,Switch, Route } from 'react-router-dom';
// import Route from "./Route";
import Home from '../pages/Home'
import Questions from '../pages/Questions'
import AskQuestion from '../pages/AskQuestion'
import QuestionDetail from '../pages/QuestionDetail'
import Author from '../pages/Author'
import Menu from '../shared/Menu';

export default function Routes() {
  return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/questions" component={Questions} />
          <Route path="/ask-question" component={AskQuestion} />
          <Route path="/questions/:id" component={QuestionDetail} />
          <Route path="/author/:id" component={Author} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
     
  );
}
