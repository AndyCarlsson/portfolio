import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Startpage from './components/Startpage/Startpage';
import 'normalize.css';
import './app.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Startpage />
    </>
  );
};

export default App;
