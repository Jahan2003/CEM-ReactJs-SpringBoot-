import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminBookCards from "../components/AdminBookCards";
import "../assets/css/Bookings.css";
import NavbarHr from './navbarHr';
import Footer from '../pages/footer';

const BookedEvents = () => {
  const [bookedEvents, setBookedEvents] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    fetchBookedEvents();
  }, []);

  const fetchBookedEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/events', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      );
      const filteredEvents = response.data;
      setBookedEvents(filteredEvents);
      console.log(filteredEvents);
      console.log(response)
    } catch (error) {
      console.error('Error fetching booked events:', error);
    }
  };

  return (
    <>
      <NavbarHr />
      <div id="event-book">
        <div id="booked-events-title">
          <p id="title">Booked Events</p>
        </div>
        <div id="booked-events-con">
          {bookedEvents.map((event) => (
            <AdminBookCards key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BookedEvents;
