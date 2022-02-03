import './login.css';
import React from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function Login() {
  return <div>
      <Navbar />
      <div className="container" >
      <div id="user-login">
        <h6><strong>Login your account</strong></h6><br/>
          <form action="/user/login" method="post">
              <input className="form-control"type="email" name="email" placeholder="Email" required /><br />
              <input className="form-control" type="password" name="password" placeholder="Password" required /><br /><br />
              <input type="submit" value="Login" />
          </form>
          <div className="text-center">
            <span>Create an account ?</span>
            <Link to="/user/register"> Sign up</Link>
        </div>
      </div>
    </div>
  </div>;
}
