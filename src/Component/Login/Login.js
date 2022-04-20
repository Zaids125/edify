import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="Login">
      <div className='page-container'>
          <h2>Welcome</h2>
          <p className="text">Don't have an account? <a href="">Sign up</a></p>
          <input  className="Email" type="email" placeholder="E-mail"/>
          <div Style="padding:24px 0 24px 0">
            <input  className="Password" type="password" placeholder="Password"/>
          </div>
          <div>  
            <input className="sub-btn" type="Submit" value="Log in"/>
          </div>
      </div>
    </div>
  )
}

export default Login;