import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

const NavbarHr = () => {
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
          <Link to="/Adashboard">Home</Link>
          </div>
        </li>
        <li>
        <div className="navLinks">
          <Link to="/service">Services</Link>
          </div>
        </li>
        <li>
          <div className="navLinks">
          <Link to="/BookedEvents">Bookings</Link>
          </div>
        </li>
        <li>
          <div className="navLinks">
          <Link to="/ViewEnquiry">Enquiry</Link>
          </div>
        </li>
      </ul>
      <ul className="nav-links1">
        <li>
      <div className="navLinks">
          <Link to="/adminProfile">Profile</Link>
          </div>
        </li>
        <li>
        <div className="navLinks">
          <Link to="/landing" onClick={handleLogout}>Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarHr;
