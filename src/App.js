import React from 'react';
import Login from './login';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './style.css';
import Dashboard from './dashboard/Dashboard';
import Attendance from './dashboard/Attendance';
import Tattendance from './dashboard/Tattendance';
import Performance from './dashboard/Performance';
import Tperformance from './dashboard/Tperformance';
import Tdashboard from './dashboard/Tdashboard';
import Salary from './dashboard/Salary';
import Fees from './dashboard/Fees';

 
function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/' component={Login} /> 
        <Route exact path='/student' component={Dashboard} />
        <Route exact path='/student/Attendance' component={Attendance} />
        <Route exact path='/student/Performance' component={Performance} />
        <Route exact path='/student/Fees' component={Fees} />
        <Route exact path='/teacher' component={Tdashboard} />
        <Route exact path='/teacher/Attendance' component={Tattendance} />
        <Route exact path='/teacher/Performance' component={Tperformance} />
        <Route exact path='/teacher/salary' component={Salary} />
        
       
      </Switch>
    </Router>
    
  );
}

export default App;
