import { useState } from 'react';
import axios from 'axios';
import "../assets/css/ServiceList.css";
import { useNavigate } from 'react-router-dom';

function AddEventForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    services: '',
    price: '',
    serviceId:''
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const serviceId=sessionStorage.getItem("serviceId");
  console.log(serviceId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        formData.serviceId = serviceId;
        console.log(formData.serviceId);
      await axios.post(`http://localhost:8080/event-details/create`, formData,{
        headers:{
Authorization:`Bearer ${token}`
        }
      });
      window.alert("Event Added Successfuly");
      navigate("/Apackage");
      sessionStorage.removeItem("serviceId");
    } catch (error) {
      console.error('Error updating event details:', error);
    }
  };

  const token = sessionStorage.getItem("token")

  return (
    <div className="edit-event-form-overlay">
      <div className="edit-event-form">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              id="eventName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="features">Features</label>
            <input
              type="text"
              id="features"
              name="services"
              value={formData.services}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startingPrice">Starting Price</label>
            <input
              type="text"
              id="startingPrice"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddEventForm;
