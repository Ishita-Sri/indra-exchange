import { useNavigate } from "react-router-dom";
import './Header.css'
import { Link } from "react-router-dom";



const NavBar = () => {
  const navigate = useNavigate();
  //const [account, setAccount] = useState(null);
  //const [contract, setContract] = useState(null);
 
  return (
      <div className="navbar">
        
          <div className="navbar-brand">About Us</div>
          <div className="navbar-brand">How it works</div>
          <div className="navbar-brand"> Contact</div> 
          <div className="navbar-icon">Download</div>
      </div>
  );
};

export default NavBar;
