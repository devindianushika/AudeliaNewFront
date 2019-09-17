import React, { Component } from "react";
import NewsContainer from "./components/news";
import "./techerdashboard.css";
import AdminNavigationBar from "../../components/AdminNavigationBar/AdminNavigationBar";
import axios from "axios";
class Teacherdashboard extends Component {
  state = {
    username: "",
    class: "",
    school: "",
    subjects: []
  };

  componentDidMount() {
    axios
      .get("/teacherdash")
      .then(data => {
        console.log(data.data);
        var inc = data.data;
        this.setState({
          class: inc.classteach,
          school: inc.school,
          username: inc.name,
          subjects: inc.subjects
        });
      })
      .catch(err => window.alert(err));
  }

  render() {
    return (
      <div>
        <AdminNavigationBar username={this.state.username} />
        <NewsContainer />
        {/* <div className="teacherdashmain">aaa</div> */}
        <div style={{ textAlign: "center" }} className="container">
          <button
            style={{ marginTop: "20%" }}
            className="teacherdashmyclassbtn btn btn-primary"
          >
            My class
          </button>

          <select className=" btn classselectroteacherdash">
            <option>10A</option>
            <option>11A</option>
            <option>12B</option>
          </select>

          <ul>
            {this.state.subjects &&
              this.state.subjects.map(ele => {
                return <li>{ele} </li>;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Teacherdashboard;
