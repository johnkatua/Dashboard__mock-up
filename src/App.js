import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <>
        <Switch>
           <Route path = '/dashboard' component = {Dashboard} />
        </Switch>
        </>
      </Router>
      
    
  );
}

export default App;
