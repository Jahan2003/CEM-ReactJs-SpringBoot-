import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

const NavbarLan = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Eventify</Link>
      </div>
      <ul className="nav-links">
        <li>
          <div className="navLinks">
          <Link to="/dashboard"></Link>
          </div>
        </li>
        <li>
        <div className="navLinks">
          <Link to="/service"></Link>
          </div>
        </li>
        <li>
          <div className="navLinks">
          <Link to="/Bookings"></Link>
          </div>
        </li>
      </ul>
      <ul className="nav-links1">
        <li>
      <div className="navLinks">
          <Link to="/UserProfile"></Link>
          </div>
        </li>
        <li>
        <div className="navLinks" style={{float:"right"}}>
          <Link to="/landing"></Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLan;
