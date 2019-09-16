import React, { Component } from "react";
import NewsContainer from "../../containers/Admin/NewsContainer/NewsContainer";
import "./techerdashboard.css";
class Teacherdashboard extends Component {
  render() {
    return (
      <div>
        <NewsContainer />
        {/* <div className="teacherdashmain">aaa</div> */}
        <div className="container">
          <button className="teacherdashmyclassbtn">My class</button>

          <select className=" btn classselectroteacherdash">
            <option>10A</option>
            <option>11A</option>
            <option>12B</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Teacherdashboard;
