import Card from '../../components/EditCard';
import '../../assets/css/ServiceList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../footer';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarHr from '../../components/navbarHr';

function EventList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchEvents();
  }, [navigate]);

  const token = sessionStorage.getItem("token");
  const serviceId=sessionStorage.getItem("serviceId");
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/event-details/service/${serviceId}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <>
      <NavbarHr/>
      <div id="container-event" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div id="title-tag"><p>Conference and Meetings</p></div>
        <div id="grid-row">
          <div className="event-list">
            {events.map((event, index) => (
              <Card
                key={index}
                index={index}
                eventName={event.name}
                description={event.description}
                features={event.services}
                startingPrice={event.price}
                className="card"
              />
            ))}
          </div>
        </div>
        <div id="Add-event-button">
        <Link to="/AddForm" className="add-event-button">
        <button>
        Add Event
        </button>
        </Link>
        <Link to="/addonView" className="add-event-button">
        <button>
        Add Add-on
        </button>
        </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventList;
