import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from './routes/Router';

function App() {
  return (
    <div>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar
        theme="light"
      />
    </div>
  );
}

export default App;
