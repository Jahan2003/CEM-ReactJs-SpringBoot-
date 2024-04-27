import { useNavigate } from 'react-router-dom';
import NavbarHr from '../../components/navbarHr';
import Footer from '../footer';
import "../../assets/css/AddEvent.css";
import { useState } from 'react';
import { useEffect } from 'react';
const AddEvent = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top whenever component mounts
      }, []);
      
    const [formData, setFormData] = useState({
        name: '',
        benefits: '',
        price: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error message when user starts typing
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Please enter package name';
        }
        if (!formData.benefits.trim()) {
            newErrors.benefits = 'Please enter package benefits';
        }
        if (!formData.price.trim()) {
            newErrors.price = 'Please enter package price';
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.price)) {
            newErrors.price = 'Please enter a valid price';
        }

        if (Object.keys(newErrors).length === 0) {
            // If no errors, proceed with form submission
            console.log('Form submitted:', formData);
            const d = JSON.stringify(formData);
            localStorage.setItem("packageFormData", d);
            navigate("/some-route");
        } else {
            // If there are errors, update the state to display error messages
            setErrors(newErrors);
        }
    };

    return (
        <>
            <NavbarHr/>
            <div id="container-add">
            <div className="event-booking-form-container">
                <h2 id="form-title">Create Package</h2>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <div className="form-group">
                            <label>Package Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>
                    <div className="field">
                        <div className="form-group">
                            <label>Package Benefits:</label>
                            <textarea name="benefits" value={formData.benefits} onChange={handleChange} />
                        </div>
                        {errors.benefits && <div className="error-message">{errors.benefits}</div>}
                    </div>
                    <div className="field">
                        <div className="form-group">
                            <label>Package Price:</label>
                            <input type="text" name="price" value={formData.price} onChange={handleChange} />
                        </div>
                        {errors.price && <div className="error-message">{errors.price}</div>}
                    </div>
                    <button id="form-button1" type="submit">Create Package</button>
                </form>
            </div>
            </div>
            <Footer />
        </>
    );
};

export default AddEvent;
