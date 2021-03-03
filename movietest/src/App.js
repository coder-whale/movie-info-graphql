import React from 'react';

import Statistics from './components/Statistics';
import Search from './components/Search';
import Example from './components/exampleRewritten';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/statistics" exact component={Statistics} />
      <Route path="/search" component={Search} />
      <Route path="/example" component ={Example} />
    </Router>
  );
}

export default App;