import React, { Component } from "react";
// import axios from "axios";
import "./forgotpassword.css";
class fogotpassword extends Component {
  state = {
    email: "",
    errnotfound: false,
    succsee: false
  };
  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  btn1handler = e => {
    e.preventDefault();
    console.log("inform");

  //   axios
  //     .post("/usr/fogotpassword", { email: this.state.email })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       if (res.data === "no_user_found") {
  //         console.log("no user found ");
  //         this.setState({ errnotfound: true });
  //       } else {
  //         console.log("email send successfullly");
  //         this.setState({ succsee: true });
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
   };
  render() {
    return (
      <div>
        <div className="container">
          <div className="forgotpassworddiv" />
          <div className="container">
            <div className="row">
              <div className="col-sm" />
              <div className="col-sm">
                <form
                  className="forgotpasswordform"
                  onSubmit={this.btn1handler}
                >
                  <div className="form-group">
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      placeholder="enter your email "
                      className="form-control"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="verifiy"
                  />
                </form>
              </div>
              <div className="col-sm" />
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}
export default fogotpassword;
