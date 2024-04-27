import { useState } from 'react';
import axios from 'axios';
import '../assets/css/login.css';
import eyeIcon from '../assets/images/eyeIcon.svg';
import reg from "../assets/images/reg.jpg";
import { TypeAnimation } from 'react-type-animation';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    organizationName: '',
    role:'user'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    const validationErrors = { ...errors };
  
    // Clear existing errors for the field being updated
    validationErrors[name] = undefined;
  
    // Validate email format if email field is being updated
    if (name === 'email' && value.trim() !== '') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      if (!isValidEmail) {
        validationErrors.email = 'Invalid email format';
      }
    }
  
    // Validate mobile number format if mobileNumber field is being updated
    if (name === 'mobileNumber' && value.trim() !== '') {
      const isValidMobile = /^\d{10}$/.test(value.trim());
      if (!isValidMobile) {
        validationErrors.mobileNumber = 'Invalid mobile number';
      }
    }
  
    // Validate password strength if password field is being updated
    if (name === 'password' && value.trim() !== '') {
      const isStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value.trim());
      if (!isStrongPassword) {
        validationErrors.password = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      }
    }
  
    // Validate organization name if organizationName field is being updated
    if (name === 'organizationName' && value.trim() !== '') {
      // Add your organization name validation logic here
    }
  
    setErrors(validationErrors);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }

    if (!formData.mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile number is required';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (!formData.organizationName.trim()) {
      validationErrors.organizationName = 'Organization name is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/api/auth/register', formData);
        console.log('Form submitted:', response.data);
        navigate("/login");
      } catch(error) {
        console.log("Error in Submitting the form:", error.message);
      }
    }
  };

  return (
    <div id="parent">
      <div id="login-outer-box-reg">
        <div id="form-box-reg">
          <h2 id="login-head">Sign Up</h2>
          <p id="signIn">Enter your details to register</p>
          <form onSubmit={handleSubmit}>
            <div className="name-field">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="email-field">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="mobile-field">
              <label>Mobile Number</label>
              <input 
                type="tel" 
                name="mobileNumber" 
                value={formData.mobileNumber} 
                onChange={handleInputChange} 
              />
              {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
            </div>
            <div className="password-field">
              <label>Password</label>
              <div className="password-input">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  value={formData.password} 
                  onChange={handleInputChange} 
                />
                <img 
                  src={eyeIcon} 
                  alt="toggle password visibility" 
                  className="eye-icon" 
                  onClick={() => setShowPassword(!showPassword)} 
                />
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="organization-field">
              <label>Organization Name</label>
              <input 
                type="text" 
                name="organizationName" 
                value={formData.organizationName} 
                onChange={handleInputChange} 
              />
              {errors.organizationName && <p className="error">{errors.organizationName}</p>}
            </div>
            <button
  type="submit"
  id="submit-reg"
  style={{
    display: 'inline-block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#5d5fe7',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease'
  }}
>
  Register
</button>          </form>
          <p id="sign-up-login">Already have an account? <Link to="/login"><span>Login</span></Link>  </p>
        </div>
        <div id="image-box">
          <img src={reg} alt="" />
          <div id="background"></div>
          <div id="text-on-image">
            <TypeAnimation 
              id="text" 
              sequence={[`From Vision to Reality,\nYour Perfect Event Partner`,5000,""]}
              speed={10}
              style={{ whiteSpace: 'pre-line',color:"white",fontSize:"38px"}}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
