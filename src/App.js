import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <>
        <Switch>
          <Route exact path='/'>
              <div className='App'>
                <Link to='/dashboard' className='App__link'> Go to dashboard</Link>
              </div>
          </Route>
           <Route path = '/dashboard' component = {Dashboard} />
        </Switch>
        </>
      </Router>
      
    
  );
}

export default App;
