import React from 'react';
import { Router } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import history from './services/history';
import Routes from '../src/routes'

function App() {
    return (
      <div className="App">
        <Header />
        <Router history={history}>
          <Routes />
        </Router>
        <Footer />
      </div>
    );
}

export default App;