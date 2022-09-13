const Login = () => {
  const [signup, setsignup] = useState(true);
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const toggle = () => {
    setsignup(!signup);
  };

  const signuphandler = async () => {
    const up = { username, password };

    try {
      
      alert("user signed successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const rendercomponent = () => {
    return (
      <div>
        <Navbar />
        <div className="login">
          <div className="container">
            <div className="row">
              <h2 className="home-title">Welcome To Instashop</h2>
              <div className="login-wrapper">
                <h4 className="text-center">
                  {signup ? "Sign Up" : "Sigh In"}
                </h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="user name"
                    autofocus
                    autocomplete="off"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  ></input>
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    autofocus
                    autocomplete="off"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  ></input>
                </div>
                {signup && (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      autofocus
                      autocomplete="off"
                    ></input>
                  </div>
                )}
                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value={signup ? "Sign Up" : "Log In"}
                    onClick={signuphandler()}
                  ></input>
                </div>
                <div className="auth-msg" onClick={toggle}>
                  {signup
                    ? "Already have an account? Log in"
                    : "Don not have an account?Sign up"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return rendercomponent();
};
