import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import AdminNavigationBar from '../../../components/AdminNavigationBar/AdminNavigationBar';
import  styles from '../../../assets/css/Admin/Register/Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';



class ParentRegisPage extends Component {
  constructor() {
    super();

    this.state = { 
      registrationNumber:"",
      chlidRegistrationNO:"",
      fullName:"", 
      address:"",
      gender:"",
      email : "",
      password: "",
      confirmPassword : "",
      contactNumber : "",
      error : false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      registrationNumber : this.state.registrationNumber,
      chlidRegistrationNO : this.props.location.state.detail,
      fullName : this.state.fullName,
      address : this.state.address,
      gender : this.state.gender,
      email : this.state.email,
      password: this.state.password,
      contactNumber : this.state.contactNumber
    };

    let confirmPassword = this.state.confirmPassword;
    let x = /\bP[0-9]{3}$/.test(user.registrationNumber);  

    if((x === true) && (confirmPassword.localeCompare(user.password) === 0)){
    console.log(user)

    // register request
    axios
    .post('http://localhost:8090/registration/parent',user,'application/json;charset=UTF-8')
    .then(res => {
        console.log(res);
        if(res.data){
          this.setState({error:true});
          alert("Already registered!");
        }else{
            alert("Registered!");
            this.props.history.push('/registerStudent');
        }
    })
    .catch(err => {
      this.setState({error:true})
        
        console.log(err);
    })
    
  }
    if(x === false){
      alert("Registration number is Invalid format!");
    }

    if(confirmPassword.localeCompare(user.password) !== 0){
      this.setState({error:true})
    }
    
  }

  render() {
    if(true){
    return (
      <div><AdminNavigationBar/>
      <div className={styles.parentmainform}>
        <div className={styles.parentformwrapper}>
        <div className={styles.primary}>
          <h2>PARENT REGISTRATION FORM</h2></div>
          <br />
          <form onSubmit={this.onSubmit}>
            <div className={styles.secondary}>
              <label htmlFor="Registration Number">
                <b> Registration Number</b>
              </label>
              <input required
                type="text"
                name="registrationNumber"
                placeholder="enter registration number"
                onChange={this.onChange}
                id="RegistrationNumber"
                className="form-control"
              />
            </div>

            <div className={styles.secondary}>
              <label htmlFor="Full name">
                <b>Full name</b>
              </label>
              <input
              required
                type="text"
                name="fullName"
                placeholder="enter name"
                onChange={this.onChange}
                id="Name"
                className="form-control"
              />
            </div>

            <div className={styles.secondary}>
              <label htmlFor="Email">
                <b>Email</b>
              </label>
              <input required
                type="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={this.onChange}
                id="email"
                className="form-control"
              />
            </div>

            <div className={styles.secondary}>
              <label htmlFor="Address">
                <b>Home Address</b>
              </label>
              <input required
                type="text"
                name="address"
                placeholder="enter Address"
                onChange={this.onChange}
                id="currentaddress"
                className="form-control"
                />
            </div>

            <div className="secondary">
              <label htmlFor="contactnumber">
                <b>Contact number</b>
              </label>
              <input required
                type="text"
                name="contactNumber"
                placeholder="enter contact number"
                onChange={this.onChange}
                id="contactnumber"
                className="form-control"
              />
            </div>

            <div className="secondary">
              <label htmlFor="Gender">
                <b>Gender</b>
              </label>
              <br />
              <div className="secondary">
                <input 
                  type="radio"
                  name="gender"
                  id="Gender"
                  value="male"
                  onChange={this.onChange}
                  /*className="form-control"*/
                />
                male
                <br />
              </div>

              <div className="secondary">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={this.onChange}
                  /* className="form-control"*/
                />{" "}
                Female
              </div>
            </div>

            <div className="secondary">
              <label htmlFor="Password">
                <b>Password</b>
                <br />
              </label>
              <input required
                type="password"
                name="password"
                placeholder="enter password"
                onChange={this.onChange}
                id="Password"
                className="form-control"
              />
              <br />
              <br />
            </div>

            <div className="secondary">
              <label htmlFor="Password">
                <b>Confirm Password</b>
                <br />
              </label>
              <input required
                type="password"
                name="confirmPassword"
                placeholder="enter password"
                onChange={this.onChange}
                id="confirmPassword"
                className="form-control"
              />
              <br />
              <br />
            </div>

             
            <div>
                {this.state.error && (<p><font color="red">Those passwords didn't mathed!</font></p>)}
              </div>
            

              <div className={styles.reset1}>
            <div className='submit'>
            <label htmlFor='submit'>
            </label><input 
            type='submit'
            value='Add Parent'
            className='btn btn-primary'  />
            </div>
            </div>

                <div className={styles.reset}>
            <label htmlFor='reset'></label>
            <input className='btn btn-primary' type='reset' value='Reset'
           />
            </div>
            </form>
            <div></div>
              <Link to="/admin">
                Back
              </Link>
            </div>
        </div>
        </div>
    )}
    else{
      return(
        <Redirect to="/" />  
      )
    }
  }
}

export default ParentRegisPage;
