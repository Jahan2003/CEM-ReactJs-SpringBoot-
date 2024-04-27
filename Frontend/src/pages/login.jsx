  import { useState } from 'react';
  import '../assets/css/login.css';
  import eyeIcon from '../assets/images/eyeIcon.svg';
  import workshop from "../assets/images/workshop.jpeg";
  import { TypeAnimation } from 'react-type-animation';
  import { Link, useNavigate } from 'react-router-dom';
  import axios from 'axios';


  function Login() {
    // const images=[
    //   {login1},
    //   {login2}
    // ];
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    
    const handleInputChange = async(e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined,
      }));
    };

    const handleSubmit = async(e) => {
      e.preventDefault();

      const validationErrors = {};

      if (!formData.email.trim()) {
        validationErrors.email = 'Email is required';
      }

      if (!formData.password.trim()) {
        validationErrors.password = 'Password is required';
      }

      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        try{
          const response = await axios.post('http://localhost:8080/api/auth/authenticate', {
            email: formData.email,
            password: formData.password,
          });
        const token = response.data.token;
        sessionStorage.setItem("token",token);
        sessionStorage.setItem("email",formData.email);
        try{
          const response=await axios("http://localhost:8080/api/users/details",{
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          const role=response.data.role;
          console.log(role);
          sessionStorage.setItem("userId",response.data.id);
          sessionStorage.setItem("role",role);
        }catch(error){
          console.log("Error",error);
        }
        console.log(sessionStorage.getItem("token"));
        console.log(sessionStorage.getItem("role"))
        if(token){
        if(sessionStorage.getItem("role")==="ADMIN"){
          navigate("/Adashboard");
        }else{
        navigate("/UdashBoard");
        }
      }else{
        console.log('Authentication failed');
      }
        }catch (error) {
          console.error('Error during authentication:', error);
        }
        
      }
    };

    return (
      <div id="parent">
      <div id="login-outer-box">
        <div id="form-box-login">
        <h2 id="login-head">Welcome</h2>
        <p id="signIn">Enter your Email and password to sign in</p>
        <form onSubmit={handleSubmit}>
          <div className="email-field">
            <label>Email</label>
            <input 
              type="text" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
            />
            {errors.email && <p className="error">{errors.email}</p>}
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
          <button type="submit" id="submit-button">Sign In</button>
        </form>
          <p id="sign-up-login">Do not have an account?<Link to="/registration"><span> Sign Up</span> </Link></p>
      </div>
      <div id="image-box">
      <img src={workshop} alt="" />
      <div id="background"></div>
      <div id="text-on-image">
        <TypeAnimation id="text" sequence={[`From Vision to Reality,\nYour Perfect Event Partner`,5000,""]}
         speed={10}
         style={{ whiteSpace: 'pre-line',color:"white",fontSize:"38px"}}
         repeat={Infinity}></TypeAnimation>
      </div>
      </div>
      </div>
      </div>
    );
  }

  export default Login;