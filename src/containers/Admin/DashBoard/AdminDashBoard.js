import React, { Component } from "react";
import { Route } from "react-router-dom";
// import styles from '../../../assets/css/Admin/AdminDashBoard/AdminDashBoard.css';
import AdminNavigationBar from "../../../components/AdminNavigationBar/AdminNavigationBar";
import NewsContainer from "../NewsContainer/NewsContainer";
import AdminMainControllers from "../AdminMainControllers/AdminMainControllers";
import AdministratorPage from "../AdministratorPage/AdministratorPage";

class AdminDashBoard extends Component {
  render() {
    return (
      <div>
        <AdminNavigationBar/>
        <NewsContainer />
        <Route
          path={this.props.match.path}
          exact={true}
          component={AdminMainControllers}
        />
        <Route
          path={`${this.props.match.path}/administration`}
          component={AdministratorPage}
        />
      </div>
    );
  }
}

export default AdminDashBoard;
