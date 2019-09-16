import React,{Component} from 'react';
import {Redirect,Link} from "react-router-dom";
// import axios from 'axios';
import  '../../../assets/css/Admin/Register/Register.css';



class StudentRegisPage extends Component{

    constructor() {
        super();
    
        this.state = {
          registrationNumber:"",
          fullName:"",
          birthday : "",
          gender:"",
          currentAddress : "",
          password: "",
          confirmPassword : "",
          contactNumber : "",
          error:false
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
          fullName : this.state.fullName,
          birthday : this.state.birthday,
          gender : this.state.gender,
          currentAddress : this.state.currentAddress,
          password: this.state.password,
          contactNumber : this.state.contactNumber
        };

    //     let confirmPassword = this.state.confirmPassword;
    //     let x = /\bS[0-9]{3}$/.test(user.registrationNumber);       
    
    // if((x === true) && (confirmPassword.localeCompare(user.password) === 0) && (user.gender !== "")){
    //     axios
    //     .post('http://localhost:8090/registration/student',user,'application/json;charset=UTF-8')
    //     .then(res => {
    //         //console.log(res)

    //         if(res.data){
    //             this.setState({error:true});
    //             alert("Already registered!");
    //           }else{
    //               alert("Registered!");

    //               this.props.history.push({
    //                 pathname: '/registerParent',
    //                 search: '?query=abc',
    //                 state: { detail: user.registrationNumber }
    //               })

    //           }
    //     })
    //     .catch(err => {
    //       this.setState({error:true})
    //     })

    //   }      
    //   if(x === false){
    //     alert("Registration number is Invalid format!");
    //   }

    //   if(user.gender === "")
    //     alert("Please enter your gender!");

    //   if(confirmPassword.localeCompare(user.password) !== 0){
    //     this.setState({error:true})
    //   }
    }

    

    render() {
      if(true){
        return(
          
            <div  className="main-form">
            <div className="form-wrapper">
                <h2>STUDENT REGISTRATION FORM</h2><br></br>
                <form onSubmit = {this.onSubmit}> 
                <div className='secondary'>
                <label htmlFor="Registration Number">
                <b> Registration Number</b></label><input required
                 type='text' 
                 name='registrationNumber'
                placeholder='enter registration number'
                onChange={this.onChange}
                id='registrationNumber' 
                className="form-control"/>
                </div>


                <div className="secondary">
                <label htmlFor="Full name"><b>Full name</b></label><input required
                 type='text'
                 name='fullName'
                 placeholder='enter name'
                 onChange={this.onChange}
                 id='name'
                 className="form-control"/>
                </div>

                <div className="secondary">
                <label htmlFor="Birthday">
                <b>Birthday</b></label><input required
                type='date'
                name='birthday'
                placeholder='enter Birthday'
                onChange={this.onChange}
                id='birthday'
                className="form-control"/>
                </div>



                <div className="secondary">
                <label htmlFor="Address">
                <b>Current Address</b></label><input required
                type='text'
                name='currentAddress'
                placeholder='enter Address'
                onChange={this.onChange}
                id='currentaddress'
                className="form-control"/></div>


<div className="secondary">
                <label htmlFor="contactnumber">
                <b>Contact number</b></label><input required
                type='text' 
                name='contactNumber'
                placeholder='enter contact number'
                onChange={this.onChange}
                id='contactnumber'
                className="form-control"/>
                </div>
               
 
                <div className="secondary">
               <label htmlFor="Gender">              
               <b>Gender</b></label><br></br><div className="secondary"><input
               type="radio"
               name='gender'
               id='gender'
               value='male'
               onChange={this.onChange}
               /*className="form-control"*//>male<br></br></div>      
            
               
               

            <div className="secondary">
                <input
                type="radio"
                name='gender'
                value='female' 
                onChange={this.onChange}
               /* className="form-control"*//> Female</div></div>
<br></br>

<div className="secondary">
                <label htmlFor="Password">
                <b>Password</b><br></br></label><input
                type='password'
                name='password'
                placeholder='enter password' 
                onChange={this.onChange} 
                id='password'
                className="form-control"/><br></br><br></br>
                </div>

                <div className="secondary">
                <label htmlFor="Password">
                <b>Confirm Password</b><br></br></label><input
                type='password'
                name='confirmPassword'
                placeholder='enter password' 
                onChange={this.onChange} 
                id='confirmPassword'
                className="form-control"/><br></br><br></br>
                </div>
<br></br>

                <div className="secondary">
                <label htmlFor="EnterParentRegistrationNumber">
                <b>If Parent alreay exist in the syastem Enter Parent Registration Number</b></label><input required
                type='text' 
                name='EnterParentRegistrationNumber'
                placeholder='Enter Parent RegistrationNumber'
                onChange={this.onChange}
                id='EnterParentRegistrationNumbercontactnumber'
                className="form-control"/>
                </div>

                 
            <div>
                {this.state.error && (<p><font color="red">Those passwords didn't mathed!</font></p>)}
              </div>
            
                


                <div className='submit'>
                <label htmlFor='submit'>
                </label>
                
                    <input
                    type='submit'
                    value='Add Student'
                    className='btn btn-primary'  />
                
                </div>

                <div className='reset'>
                <label htmlFor='reset'></label>
                <input class='btn btn-primary' type='reset' value='Reset'
               />
                </div>
                </form>
                <div>
              <Link to="/dashboard">
                Back
              </Link>
            </div>
            </div>
            </div>
        )
        }else{
          return(
            <Redirect to="/" />  
        )
        }

    }    
}

export default StudentRegisPage;