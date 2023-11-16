import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>
            by continuing, i agree to the <span>Terms and Conditions</span> and <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup