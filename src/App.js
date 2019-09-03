import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminDashBoard from "./containers/Admin/DashBoard/AdminDashBoard";
import LoginPage from "./containers/Auth/LoginPage/LoginPage";
import Studentdashboard from "./pages/studentdashboard/studentdashboard";
import AdminNavigationBar from "./components/AdminNavigationBar/AdminNavigationBar";

function App() {
  return (
    <div>
      <AdminNavigationBar />
      <Router>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/admin" component={AdminDashBoard} />
        <Route path="/student" component={Studentdashboard} />
      </Router>
    </div>
  );
}

export default App;
