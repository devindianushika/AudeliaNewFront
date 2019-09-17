import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminDashBoard from "./containers/Admin/DashBoard/AdminDashBoard";
import LoginPage from "./containers/Auth/LoginPage/LoginPage";
import Studentdashboard from "./pages/studentdashboard/studentdashboard";
// import AdminNavigationBar from "./components/AdminNavigationBar/AdminNavigationBar";
import Teacherdashboard from "./pages/teacherdashboard/teacherdashboard";
import AdminRegisPage from "./containers/Admin/AdminRegisPage/AdminRegisPage";
import ParentRegisPage from "./containers/Admin/ParentRegisPage/ParentRegisPage";
import fogotpassword from "./pages/forgotpassword/forgotpassword";
function App() {
  return (
    <div>
      {/* <AdminNavigationBar /> */}
      <Router>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/admin" component={AdminDashBoard} />
        <Route path="/student" component={Studentdashboard} />
        <Route path="/teacher" component={Teacherdashboard} />
        <Route path="/adminregis" component={AdminRegisPage} />
        <Route path="/parentregis" component={ParentRegisPage} />
        <Route path="/forgotpassword" component={fogotpassword} />
      </Router>
    </div>
  );
}

export default App;
