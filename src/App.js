import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Start from './components/Start/Start';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import ProjectDetail from './components/Projects/ProjectsDetail/ProjectsDetail';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Start} />
        <Route path='/work' exact component={Projects} />
        <Route path='/work/:id' component={ProjectDetail} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
