import React from 'react'
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
import './Login.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Login = () => {
    return (
        <div>
            <div className="path">
            <ArrowBackIcon className="icon"/>
            <p>
            <NavLink to="/" className="navigation">Back</NavLink></p>
            </div>
         <div className="logindiv">
          <TextField
          className="inputfield"
          id="standard-basic"
          label="Email"
          type="email"
          />  
          <TextField
                className="inputfield"
                id="standard-basic"
                label="Password"
                type="password"
              />
              <button className="signinbtn">
                  <NavLink to='' className="navigation1">
                  Sign In
                  </NavLink>
                  </button>
              </div>
        </div>
    )
}

export default Login
