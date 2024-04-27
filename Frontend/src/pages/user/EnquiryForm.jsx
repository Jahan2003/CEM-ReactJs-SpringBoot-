import { useState, useEffect } from 'react';
import '../../assets/css/EnquiryForm.css'; // Import CSS file for styling
import Navbar from '../../components/navbar';
import Footer from '../footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name:sessionStorage.getItem("name"),
    email: sessionStorage.getItem("email"),
    message: ''
  });
  const [scheduleMeeting, setScheduleMeeting] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const eventName=sessionStorage.getItem("eventname");
  const date=sessionStorage.getItem("date");
  const token=sessionStorage.getItem("token");
  const navigate=useNavigate();
  console.log(date);
  useEffect(() => {
    // Fetch available time slots when scheduleMeeting checkbox is checked
    if (scheduleMeeting) {
      fetchAvailableTimeSlots();
    }
  }, [scheduleMeeting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setScheduleMeeting(!scheduleMeeting);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const fetchAvailableTimeSlots = () => {
    // Mock data for available time slots (for demonstration purpose)
    const mockAvailableTimeSlots = [
      '10:00 AM',
      '11:00 AM',
      '2:00 PM',
      '3:00 PM',
      '4:00 PM'
    ];
    setAvailableTimeSlots(mockAvailableTimeSlots);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedFormData = { ...formData,selectedTimeSlot,date,eventName};
    console.log(updatedFormData);
    try {
        const response=await axios.post('http://localhost:8080/api/enquiries', updatedFormData,{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });
        setFormData({ name: '', email: '', message: '' });
        setSelectedTimeSlot('');
        sessionStorage.removeItem("eventname");
        sessionStorage.removeItem("date");
        console.log(response);
        window.alert("Form Submitted Successfully");
        navigate("/Bookings");
    } catch (error) {
        console.error('Error updating user profile:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div id="form-box">
    <div id="form-title" style={{marginTop:"12vh",display:"flex",justifyContent:"center",fontSize:"1.5rem",color:"#5d5fe7"}}>
    <h2>Enquiry Form</h2>
    </div>
    <div className="enquiry-form-container" style={{marginTop:"2vh"}}>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={scheduleMeeting}
              onChange={handleCheckboxChange}
            />{' '}
            Schedule Meeting
          </label>
        </div>
        {scheduleMeeting && (
          <div className="form-group">
            <label>Available Time Slots for Today</label>
            <ul style={{listStyle:"none"}}>
              {availableTimeSlots.map((timeSlot, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="timeSlot"
                      value={timeSlot}
                      checked={selectedTimeSlot === timeSlot}
                      onChange={() => handleTimeSlotChange(timeSlot)}
                    />{' '}
                    {timeSlot}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default EnquiryForm;
