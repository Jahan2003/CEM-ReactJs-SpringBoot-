import { useNavigate } from 'react-router-dom';
import '../assets/css/BookedEventCard.css'; // Import CSS file for styling
import PropTypes from "prop-types";

const BookedEventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleViewInvoice = () => {
    // Handle view invoice functionality
    console.log(`View invoice for event ID: ${event.id}`);
  };

  const handleEnquiry = () => {
    sessionStorage.setItem("eventname", event.eventName);
    sessionStorage.setItem("date", event.fromDate);
    navigate("/EnquiryForm");
  };

  const handleApprove = () => {
    window.location.href = `mailto:jahansai2003@gmail.com.com?subject=Approval&body=Approval for event ID: ${event.id}`;
  };

  const handleRejection = () => {
    window.location.href = `mailto:jahansai2003@gmail.com?subject=Rejection&body=Rejection for event ID: ${event.id}`;
  };

  const addon = JSON.parse(event.addon);
  const statusColor = event.approval === 'approve' ? 'green' : 'red';

  return (
    <div className="booked-event-card">
      <div className="event-info">
        <h2>{event.eventName}</h2>
        <p><strong>Date:</strong> {event.fromDate}</p>
        <p><strong>Amount:</strong> ₹{event.totalAmount}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>Attendees:</strong> {event.attendees}</p>
        <p><strong>Add-ons:</strong> {addon.map((element, index) => (
          <span key={index}>{element}, </span>
        ))}</p>
        <p>
          <strong>Status:</strong>
          <span className="status" style={{ color: statusColor, fontWeight: "bold" }}>
            {event.approval === 'approve' ? 'Approved' : event.approval === 'reject' ? 'Rejected' : 'Waiting'}
          </span>
        </p>
      </div>
      <div className="buttons">
        <button className="enquiry-button" onClick={handleEnquiry}>Enquiry</button>
      </div>
    </div>
  );
};

export default BookedEventCard;

BookedEventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    fromDate: PropTypes.string.isRequired,
    totalAmount: PropTypes.number.isRequired,
    venue: PropTypes.string.isRequired,
    attendees: PropTypes.number.isRequired,
    addon: PropTypes.string.isRequired,
    approval: PropTypes.string.isRequired,
  }).isRequired,
};
