import './navbar.css';

const Navbar = () => {
  const rendercomponent = () => {


    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="header-wrapper">
              <div className="logo">
                <a href='/'>ECOMMERCE</a>
              </div>
              <div className="user-action">
                <a href='/cart'>Cart</a>
                <div className="user-intro">
                  <a href='/guest'>Guest</a>
                </div>
                <div className="login-btn">
                  <a href='/login'>Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    rendercomponent()
  );
}

export default Navbar;