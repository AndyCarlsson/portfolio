import React from 'react';
import Navbar from './components/Navbar/Navbar';
import StartPage from './components/Startpage/StartPage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ContactPage from './components/ContactPage/ContactPage';
import AboutPage from './components/AboutPage/AboutPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './app.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={StartPage} />
        <Route path='/work' component={ProjectPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
