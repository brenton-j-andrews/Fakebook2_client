import React, { useRef, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";

import "./login.css";

const Login = () => {

  const email = useRef();
  const password = useRef();

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    try {
      login({ 
        email: email.current.value, 
        password: password.current.value 
      }, dispatch);
    }
    catch (error) {
      console.log("Error: ", error);
    }
  }

  const login = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START"});

    try {
      const response = axios.post("/auth/login", userCredentials);
      dispatch({ type: "LOGIN_SUCCESSFUL", payload: response.data });
    }

    catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
  }

  return (
    <div className="login">

        <div className="banner">
            <span className="bannerBrand"> FakeBook </span>
        </div>

        <div className="loginWrapper">
            <div className="loginFormWrapper">
                <div className="loginLeft">
                    <h1 className="loginBrand"> FakeBook </h1>
                    <span className="loginStatement"> Connect with absolutely nobody online since this is a portfolio project. </span>
                </div>

                <div className="loginRight">
                    <div className="loginBox">

                        <form className="loginBoxUpper" onSubmit={handleLoginSubmit}>
                            <input 
                              className="loginInput"
                              placeholder="Email" 
                              type="text"  
                              ref={email}
                            />

                            <input 
                              className="loginInput"
                              placeholder="Password" 
                              type="text" 
                              ref={password}
                            />
                        
                            <button className="loginButton" type="submit"> Log In </button>
                            {/* <button className="loginButton"> Sign In via Guest Account </button> */}
                        </form>
                
                        <div className="loginBoxLower">
                            <div className="actionPromptWrapper">
                                <span className="loginActionPrompt"> Not Registered? </span>
                                <a className="loginActionAnchor" href="/register"> Sign Up Here </a>
                            </div>

                            <div className="actionPromptWrapper">
                                <span className="loginActionPrompt"> Forgot Password? </span>
                                <a className="loginActionAnchor" href="/password_reset"> Reset Here </a>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}; 

export default Login;