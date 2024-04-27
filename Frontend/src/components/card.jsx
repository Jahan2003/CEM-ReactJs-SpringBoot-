import PropTypes from 'prop-types';
import '../assets/css/card.css';

function Card({ index, eventName, description, features, startingPrice, isSelected, onClick }) {
  const handleClick = () => {
    onClick(index);
    const event={
      "name":eventName,
      "price":startingPrice
    }
    sessionStorage.setItem("event",JSON.stringify(event));
    console.log(event);
  };
  const featureList = features.split(',');
  
  return (
    <div className={`vertical-event-card ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
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
