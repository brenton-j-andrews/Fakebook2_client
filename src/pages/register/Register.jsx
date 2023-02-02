import "./register.css";

const Register = () => {
    
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
                        <div className="registerBox">

                            <div className="registerBoxUpper">
                                <input className="registerInput"  placeholder="Email" type="text" />

                                <div className="registerBoxUpperCenter">
                                    <input className="registerInputSmall" type="text" placeholder="First Name"/>
                                    <input className="registerInputSmall" type="text" placeholder="Last Name"/>
                                </div>

                                <input className="registerInput"  placeholder="Password" type="password" />
                                <input className="registerInput"  placeholder="Verify Password" type="password" />

                            
                                <button className="loginButton"> Register Account </button>
                                <button className="loginButton"> Just Visiting? Sign In via Guest Account </button>
                            </div>
                    
                            <div className="registerBoxLower">
                                <div className="actionPromptWrapper">
                                    <span className="loginActionPrompt"> Have an account? </span>
                                    <a className="registerActionAnchor" href="/login"> Log In Here </a>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Register;