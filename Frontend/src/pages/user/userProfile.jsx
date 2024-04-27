import { FaEdit, FaSave } from 'react-icons/fa';
import '../../assets/css/userProfile.css';
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import profile from "../../assets/images/profile.png";  
import Footer from '../footer';
import axios from 'axios';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        password:'',
        organizationName: '',
        role:''
    });

    const [editable, setEditable] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchUserProfile();
    }, []);
   const token=sessionStorage.getItem("token");
    const fetchUserProfile = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users/details',{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            sessionStorage.setItem("userId",response.data.id);
            console.log(sessionStorage.getItem("userId"));
            setUserData({
                name:response.data.name,
                email:response.data.email,
                mobileNumber:response.data.mobileNumber,
                password:response.data.password,
                organizationName:response.data.organizationName,
                role:response.data.role
            });
            console.log(userData);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleEditClick = () => {
        setEditable(true);
    };

    const handleSaveClick = async () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log(userData);
            try {
                const userId=sessionStorage.getItem("userId");
                const response=await axios.put(`http://localhost:8080/api/users/${userId}`, userData,{
                    headers:{
                        Authorization:`Bearer ${token}`,
                    }
                });
                console.log(response);
                setEditable(false);
                setErrors({});
            } catch (error) {
                console.error('Error updating user profile:', error);
            }
        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;
        const errors = {};

        if (!emailPattern.test(userData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!phonePattern.test(userData.mobileNumber)) {
            errors.mobileNumber = 'Please enter a valid mobile number';
        }

        if (!userData.name.trim()) {
            errors.name = 'Please enter your name';
        }

        if (!userData.organizationName.trim()) {
            errors.organizationName = 'Please enter your organization';
        }

        return errors;
    };

    return (
        <>
            <Navbar />
            <div id="userProfile-page">
                <div className="user-profile">
                    <h2>User Profile</h2>
                    <div id="user-profile-con">
                        <img src={profile} alt="" />
                    </div>
                    <form id="pform">
                        <div className="form-group">
                            <label>Name:</label>
                            {editable ? (
                                <>
                                    <input
                                        type="text"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </>
                            ) : (
                                <span>{userData.name}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            {editable ? (
                                <>
                                    <input
                                        type="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </>
                            ) : (
                                <span>{userData.email}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Mobile:</label>
                            {editable ? (
                                <>
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        value={userData.mobileNumber}
                                        onChange={handleInputChange}
                                    />
                                    {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
                                </>
                            ) : (
                                <span>{userData.mobileNumber}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Organization:</label>
                            {editable ? (
                                <>
                                    <input
                                        type="text"
                                        name="organizationName"
                                        value={userData.organizationName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.organizationName && <span className="error">{errors.organizationName}</span>}
                                </>
                            ) : (
                                <span>{userData.organizationName}</span>
                            )}
                        </div>
                        <div id="button">
                            {editable ? (
                                <button className="profile-button" type="button" onClick={handleSaveClick}>
                                    <FaSave /> Save
                                </button>
                            ) : (
                                <button className="profile-button" type="button" onClick={handleEditClick}>
                                    <FaEdit /> Edit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserProfile;
