import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/shared/Navigation';
import Routes from './components/shared/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes/>
    </BrowserRouter>
  );
}
 
export default App;