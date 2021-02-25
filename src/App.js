import React from 'react';
import Navigation, { Start, Projects, ProjectDetail, About, Contact } from './components/index';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/'>
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
