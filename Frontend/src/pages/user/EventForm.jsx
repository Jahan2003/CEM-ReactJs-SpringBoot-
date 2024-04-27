import { forwardRef } from 'react';
import '../../assets/css/AddEvent.css';
import '../../assets/css/EventForm.css';
import PropTypes from 'prop-types';
const EventBookingForm = forwardRef(({ formData, errors, handleChange, handleSubmit }, ref) => {
  const venueOptions = ['Venue 1', 'Venue 2', 'Venue 3'];

  return (
    <>
      <div className="event-booking-form-container" style={{ border: "none" }}>
        <h2 id="form-title">Event Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className="field">
            <div className="form-group">
              <label>Event Name:</label>
              <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
            </div>
            {errors.organization && <div className="error-message">{errors.organization}</div>}
          </div>
          <div className='field'>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className='field'>
            <div className="form-group">
              <label>Mobile:</label>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
            {errors.mobile && <div className="error-message">{errors.mobile}</div>}
          </div>
          <div className='field'>
            <div className="form-group">
              <label>From Date:</label>
              <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
            </div>
            {errors.fromDate && <div className="error-message">{errors.fromDate}</div>}
          </div>
          <div className='field'>
            <div className="form-group">
              <label>To Date:</label>
              <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
            </div>
            {errors.toDate && <div className="error-message">{errors.toDate}</div>}
          </div>
          <div className='field'>
            <div className="form-group">
              <label>City:</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            {errors.city && <div className="error-message">{errors.city}</div>}
          </div>
          <div className='field'>
            <div className="form-group">
              <label>No of Attendees:</label>
              <input type="number" name="attendees" value={formData.attendees} onChange={handleChange} />
            </div>
            {errors.attendees && <div className="error-message">{errors.attendees}</div>}
          </div>
          <div className='field'>
            <div className="form-group">
              <label>Venue:</label>
              <select name="venue" value={formData.venue} onChange={handleChange}>
                <option value="">Select Venue</option>
                {venueOptions.map((venue, index) => (
                  <option key={index} value={venue}>{venue}</option>
                ))}
              </select>
            </div>
            {errors.venue && <div className="error-message">{errors.venue}</div>}
          </div>
          <div className='field'>
            <div className="form-group">
              <label>Enquiry:</label>
              <textarea name="enquiry" value={formData.enquiry} onChange={handleChange} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
});
EventBookingForm.displayName = 'EventBookingForm';

// Prop types validation
EventBookingForm.propTypes = {
  formData: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
export default EventBookingForm;
