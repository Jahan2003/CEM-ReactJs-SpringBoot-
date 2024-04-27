import PropTypes from 'prop-types';
import '../assets/css/EditCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Card({ index, eventName, description, features, startingPrice}) {
  const featureList = features.split(',');
  const navigate = useNavigate();
  const handleEdit = () => {
    sessionStorage.setItem("eventdetailName",eventName);
    navigate("/EditForm")
  };
  const token=sessionStorage.getItem("token");
  const handleDelete = async() => {
    try{
    await axios.delete(`http://localhost:8080/event-details/${eventName}/delete`,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    } 
    
    )
}catch(error){
    console.log("Error Submitting Form",Error); 
}
  };
  
  return (
    <div className="vertical-event-card">
      <div className="event-info">
        <h3 className="event-name">{eventName}</h3>
        <p className="event-description">{description}</p>
        <ul className="event-features">
          {featureList.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          <li className="more-features">+ More</li>
        </ul>
        <p className="starting-price">
          Starting Price: <span className="bold">₹{startingPrice}</span>
        </p>
      </div>
      <div className="buttons">
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  eventName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  startingPrice: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
