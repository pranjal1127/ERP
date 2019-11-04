import React from 'react';
import Login from './login1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Dashboard from './dashboard/Dashboard';
 
function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/student/:Id' component={Dashboard} />
        
      </Switch>
    </Router>
    
  );
}

export default App;
