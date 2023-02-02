import "./login.css";

const Login = () => {
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

                            <div className="loginBoxUpper">
                                <input placeholder="Email" type="text" className="loginInput" />
                                <input placeholder="Password" type="password" className="loginInput" />
                            
                                <button className="loginButton"> Log In </button>
                                <button className="loginButton"> Sign In via Guest Account </button>
                            </div>
                    
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