import React from 'react';
import Header from './components/shared/Header';
import Menu from './components/shared/Menu';
import Footer from './components/shared/Footer';
import Home from './components/pages/Home'
import Questions from './components/pages/Questions'
import AskQuestion from './components/pages/AskQuestion'
import QuestionDetail from './components/pages/QuestionDetail'
import Author from './components/pages/Author'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Author />
      <Footer />
    </div>
  );
}

export default App;