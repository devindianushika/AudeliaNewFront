import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminDashBoard from './containers/Admin/DashBoard/AdminDashBoard';
import LoginPage from './containers/Auth/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact={true} component={LoginPage}/>
        <Route path="/admin" component={AdminDashBoard}/>
      </Router>
    </div>
  );
}

export default App;
