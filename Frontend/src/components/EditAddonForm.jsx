import { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/css/ServiceList.css";
import { useNavigate } from 'react-router-dom';

function EditAddonForm() {
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    price: '',
    description:''
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData.id);
      await axios.put(`http://localhost:8080/api/addons/${addon_id}`, formData,{
        headers:{
Authorization:`Bearer ${token}`
        }
      });
      window.alert("Updated Successfuly");
      navigate("/addonView");
     
    } catch (error) {
      console.error('Error updating event details:', error);
    }
  };

  const token = sessionStorage.getItem("token")
  const eventName = sessionStorage.getItem("eventdetailName");

  useEffect(() => {
    fetchDetails();
  }, []);
  const addon_id=sessionStorage.getItem("addon-id");
  const fetchDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/addons/${addon_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data);
      setFormData(response.data);
      console.log(formData.name);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div className="edit-event-form-overlay">
      <div className="edit-event-form">
        <h2>Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Addon Name</label>
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
            <label htmlFor="startingPrice">Price</label>
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

export default EditAddonForm;
