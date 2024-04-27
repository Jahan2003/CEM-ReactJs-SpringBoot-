import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

const Navbar = () => {
  const handleLogout=()=>{
    sessionStorage.clear();
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Eventify</Link>
      </div>
      <ul className="nav-links">
        <li>
          <div className="navLinks">
          <Link to="/UdashBoard">Home</Link>
          </div>
        </li>
        <li>
        <div className="navLinks">
          <Link to="/services">Services</Link>
          </div>
        </li>
        <li>
          <div className="navLinks">
          <Link to="/bookings">Bookings</Link>
          </div>
        </li>
      </ul>
      <ul className="nav-links1">
        <li>
      <div className="navLinks">
          <Link to="/UserProfile">Profile</Link>
          </div>
        </li>
        <li>
        <div className="navLinks" onClick={handleLogout}>
          <Link to="/landing">Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
