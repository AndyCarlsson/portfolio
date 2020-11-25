import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Startpage from './components/Startpage/Startpage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ContactPage from './components/ContactPage/ContactPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './app.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Startpage} />
        <Route path='/work' component={ProjectPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
