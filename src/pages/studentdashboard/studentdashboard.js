import React, { Component } from "react";
import axios from "axios";
import AdminNavigationBar from "../../components/AdminNavigationBar/AdminNavigationBar";
class Studentdashboard extends Component {
  state = {
    name: "",
    class: "",
    subjects: []
  };

  componentDidMount() {
    axios
      .get("/studentdash")
      .then(res => {
        console.log(res.data);
        this.setState({
          name: res.data.name,
          class: res.data.class,
          subjects: res.data.subjectsenroled
        });
      })
      .catch(err => {
        console.log(err);
        alert("error");
      });
  }

  render() {
    return (
      <div>
        <AdminNavigationBar username={this.state.name} />
        <div className="container">student dashboard</div>
        <h1> good day {this.state.name && this.state.name} </h1>
        <h3> class : {this.state.class} </h3>

        <ul>
          {this.state.subjects &&
            this.state.subjects.map(ele => {
              return (
                <li>
                  <span style={{ color: "red" }}> {ele.subjectname} </span>
                  {ele.meterial.map(eee => {
                    return <li> {eee} </li>;
                  })}{" "}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Studentdashboard;
