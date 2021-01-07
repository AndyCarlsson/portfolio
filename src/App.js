import React from 'react';
import NavigationComponent from './components/Navigation/NavigationComponent';

import Start from './components/Start/Start';
import ProjectsPage from './components/Projects/ProjectsPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import ProjectDetail from './components/Projects/ProjectsDetail/ProjectsDetail';

function App() {
  return (
    <Router>
      <NavigationComponent />
      <Switch>
        <Route path='/' exact component={Start} />
        <Route path='/work' exact component={ProjectsPage} />
        <Route path='/work/:id' component={ProjectDetail} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
