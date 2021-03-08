import React from 'react';

import Statistics from './components/Statistics';
import Search from './components/Search';
import Example from './components/exampleRewritten';
import Mainpage from './components/mainpage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component = {Mainpage} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/search" component={Search} />
      <Route path="/example" component ={Example} />
    </Router>
  );
}

export default App;