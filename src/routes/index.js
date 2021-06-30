import React from "react";
import { BrowserRouter,Switch, Route } from 'react-router-dom';
// import Route from "./Route";
import Home from '../components/pages/Home'
import Questions from '../components/pages/Questions'
import AskQuestion from '../components/pages/AskQuestion'
import QuestionDetail from '../components/pages/QuestionDetail'
import Author from '../components/pages/Author'
import Login from '../components/pages/Login'
import Menu from '../components/shared/Menu';
import { PrivateRoute } from './PrivateRoute';

export default function Routes() {
  
  return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/questions" component={Questions} />
          <PrivateRoute exact path="/ask-question" component={AskQuestion} />
          <Route path="/questions/:id" component={QuestionDetail} />
          <Route path="/author/:id" component={Author} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Login} />
          <Route path="/categories/:id/questions" exact component={Home} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
     
  );
}
