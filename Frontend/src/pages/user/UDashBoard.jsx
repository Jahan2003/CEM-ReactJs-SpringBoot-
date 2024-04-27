import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "../../assets/css/UDashBoard.css";
import axios from 'axios';
import Navbar from '../../components/navbar';


const Home = () => {
  const [name , setName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const token=sessionStorage.getItem("token");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve the token from local storag
        // Fetch user data including organization name
        const response = await axios.get('http://localhost:8080/api/users/details', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        sessionStorage.setItem('mobile' , response.data.mobileNumber);
        sessionStorage.setItem('organization',response.data.organizationName);
        
        setName(response.data.name);
        setOrganizationName(response.data.organizationName);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    const fetchUpcomingEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/events', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const userId=sessionStorage.getItem("userId");
        const filteredEvents = response.data.filter(event => event.userId == userId);
        setUpcomingEvents(filteredEvents);
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
        // Handle error
      }
    };

    fetchUserData();
    fetchUpcomingEvents();
  }, []);
 

  const countUpcomingEvents = upcomingEvents.length;


  return (
    <>
      <Navbar/>
      <div className='welcome-note'style={{fontSize:"30px", padding:"20px",fontWeight:"bolder"}}>Welcome Back!{name}</div>
      <div className='dashboard-top-cardx'>
        <div className="cardx mcorporate-name">
          <h2>Corporate Name</h2>
          <p>{organizationName}</p> 
        </div>
        <div className="cardx mevents-booked">
          <h2>Events Booked</h2>
          <p>{countUpcomingEvents}</p>
        </div>
        <div className="cardx mupcoming-event">
          <h2>Upcoming Event</h2>
          {upcomingEvents.map(event => (
            <div key={0}>
              <p>{event.eventName}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="xdashboard">
        <div className="card upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-calendar">
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              height="500px"
              events={upcomingEvents.map(event => ({
                title: event.eventName,
                date: event.fromDate
              }))}
            />
          </div>
        </div>
      </div>

      <div className="dashboard">
        <div className="card recently-booked">
          <h2>Recently Booked</h2>
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-item">
              <p>Title: {event.name}</p>
              <p>Date: {event.fromDate}</p>
              <p>Location: {event.city}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;