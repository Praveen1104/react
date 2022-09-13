import "./header.css";
import ima from "./image/flip.png";

const Header = () => {
  return (
    <div>
    <div className="container">
      <div className="logo">
      <img src={ima} alt="error" id="im"></img>
      </div>
    </div>
    </div>
  );
};
export default Header;
