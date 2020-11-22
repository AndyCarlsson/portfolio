import React from 'react';
import Navbar from './components/navbar/navbar';
import 'normalize.css';
import './app.css';
import Startpage from './components/startpage/startpage';

const App = () => {
  return (
    <>
      <Navbar />
      <Startpage />
    </>
  );
};

export default App;
