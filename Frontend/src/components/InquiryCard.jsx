import PropTypes from 'prop-types';
import '../assets/css/InquiryCard.css';

const InquiryCard = ({ inquiry, onReply }) => {
  const handleReply = () => {
    onReply(inquiry.id, inquiry.email);
  };

  return (
    <div className="inquiry-card">
      <div className="inquiry-info">
        <h2>{inquiry.name}</h2>
        <p><strong>Event Name:</strong> {inquiry.eventName}</p>
        <p><strong>Message:</strong> {inquiry.message}</p>
        <p><strong>Email:</strong> {inquiry.email}</p>
        <p><strong>Meeting Time Slot:</strong> {inquiry.selectedTimeSlot}</p>
      </div>
      <div className="buttons">
        <button className="reply-button" onClick={handleReply}>Reply</button>
      </div>
    </div>
  );
};

InquiryCard.propTypes = {
  inquiry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    selectedTimeSlot: PropTypes.string.isRequired,
  }).isRequired,
  onReply: PropTypes.func.isRequired,
};

export default InquiryCard;
