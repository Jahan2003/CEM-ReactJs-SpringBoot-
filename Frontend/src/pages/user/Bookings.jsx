import { useState, useEffect } from 'react';
import axios from 'axios';
import BookedEventCard from '../../components/BookedEventCard';
import Navbar from '../../components/navbar';
import Footer from '../footer';
import '../../assets/css/Bookings.css';

const BookedEventsPage = () => {
  const [bookedEvents, setBookedEvents] = useState([]);
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    fetchBookedEvents();
  }, []);

  const fetchBookedEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/events', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Filter events based on userId
      const filteredEvents = response.data.filter(event => event.userId == userId);
      setBookedEvents(filteredEvents);
      console.log(filteredEvents);
    } catch (error) {
      console.error('Error fetching booked events:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div id="event-book">
        <div id="booked-events-title">
          <p id="title">Booked Events</p>
        </div>
        <div id="booked-events-con">
          {bookedEvents.map((event) => (
            <BookedEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookedEventsPage;
