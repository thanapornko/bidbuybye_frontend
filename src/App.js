import React from 'react';
import { Router } from 'react-router-dom';
import Header from './component/Header/header';
import HomePage from './homePage/HomePage';

function App() {
  return (
    <div>
      {/* <Router /> */}
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
