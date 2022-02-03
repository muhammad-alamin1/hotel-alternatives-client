import './register.css';
import React from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';

export default function Register() {
  return <div>
      <Navbar />
      <div className="container" id="register">
        <h6><strong>Create an account</strong></h6>
        <div id="register-form">
            <form action="" method="post">
                <input className="form-control" type="text" name="full-name" placeholder="Full Name" required /> <br/>
                <input className="form-control" type="text" name="username" placeholder="Username" required /> <br/>
                <input className="form-control" type="email" name="email" placeholder="Email" required /> <br/>
                <input className="form-control" type="number" name="mobile" placeholder="Mobile" required /> <br/>
                <input className="form-control" type="password" name="password" placeholder="Password" required /> <br/>
                <input className="form-control" type="password" name="confirm-password" placeholder="Confirm Password" required /> <br/>
                <input type="submit" value="Register" />
            </form>
        </div>
        <div className="text-center">
            <span>already have an account ?</span>
            <Link to="/user/login"> Login</Link>
        </div>
        <div id="register-with-google">
            <p><img src={google} id="google-icon" alt="google"/> Continue with Google</p>
        </div>
      </div>
  </div>;
}
