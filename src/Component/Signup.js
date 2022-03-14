import React from "react";
import './Signup.css'

function Signup() {

  return (
    <div className="Signup">
      <div className="page-container">
        <h2>Get Started</h2>
        <p className="text">Already a user? <a href="">Login</a></p>
        <div className="name">
          <input  className="FirstName" type="text" placeholder="First Name" required/>
          <div Style="padding-left:24px">
            <input  className="LastName" type="text" placeholder="Last Name"/>
          </div>
        </div>
        <input  className="Email" type="email" placeholder="E-mail"/>
        <div Style="padding:24px 0 24px 0">
          <input  className="Password" type="password" placeholder="Password"/>
        </div>
        <div>  
          <input className="sub-btn" type="Submit" value="Sign up"/>
        </div>
      </div>
    </div>
  );
}

export default Signup;
