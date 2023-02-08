import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./register.css";

const Register = () => {
  
  const email = useRef();
  const username = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const password = useRef();
  const verifyPassword = useRef();

  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Check that password inputs match.
    if (password.current.value !== verifyPassword.current.value) {
      password.current.setCustomValidity("Your passwords do not match.")
    }

    else {

      try {
        await axios.post("/auth/register", { 
          email : email.current.value,
          username : username.current.value,
          firstName : firstName.current.value,
          lastName : lastName.current.value,
          password : password.current.value
        });

        navigate("/login");
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="register">

      <div className="banner">
        <span className="bannerBrand"> FakeBook </span>
      </div>

      <div className="registerWrapper">

        <div className="registerFormWrapper">

          <div className="registerLeft">
            <h1 className="loginBrand"> FakeBook </h1>
            <span className="loginStatement"> Connect with absolutely nobody online since this is a portfolio project. </span>
          </div>

          <div className="registerRight">

            <form className="registerBox" onSubmit={handleRegisterSubmit}>

              <div className="registerBoxUpper">
                <input className="registerInput"  placeholder="Email" type="text" ref={email}/>
                <input className="registerInput"  placeholder="Username" type="text" ref={username}/>

                <div className="registerBoxUpperCenter">
                  <input className="registerInputSmall" type="text" placeholder="First Name" ref={firstName}/>
                  <input className="registerInputSmall" type="text" placeholder="Last Name" ref={lastName}/>
                </div>

                <input className="registerInput"  placeholder="Password" type="password" ref={password}/>
                <input className="registerInput"  placeholder="Verify Password" type="password" ref={verifyPassword}/>

            
                <button className="loginButton" type="submit"> Register Account </button>
                <button className="loginButton"> Just Visiting? Sign In via Guest Account </button>
              </div>
      
              <div className="registerBoxLower">
                <div className="actionPromptWrapper">
                  <span className="loginActionPrompt"> Have an account? </span>
                  <a className="registerActionAnchor" href="/login"> Log In Here </a>
                </div>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Register;