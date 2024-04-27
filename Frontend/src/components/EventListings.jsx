import Card from './card';
import '../assets/css/EventList.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function EventList({ handleEventSelect, selectedEventIndex, errors }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);
  const token=sessionStorage.getItem("token");
  const serviceId=1;
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/event-details/service/${serviceId}`,{
        headers:{
          "Authorization":`Bearer ${token}`,
        },
      });
      console.log(response.data);
      setEvents(response.data); 
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleCardClick = (index) => {
    handleEventSelect(index); 
  };

  return (
    <div id="container-event" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="event-list">
        {events.map((event, index) => (
          <Card
            key={index}
            index={index}
            eventName={event.name}
            description={event.description}
            features={event.services}
            startingPrice={event.price}
            isSelected={selectedEventIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      {(selectedEventIndex == null && errors.event) && <div className="error-msg" style={{ color: "red", display: "flex" }}>Select an Event</div>}
    </div>
  );
}

EventList.propTypes = {
  handleEventSelect: PropTypes.func.isRequired,
  selectedEventIndex: PropTypes.number,
  errors: PropTypes.object
};

export default EventList;
