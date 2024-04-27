import '../assets/css/BookedEventCard.css';
import PropTypes from "prop-types";
import { useState } from 'react';
import axios from 'axios';
const AdminBookCards
 = ({ event }) => {
  const addon=JSON.parse(event.addon)
  const token=sessionStorage.getItem("token");
  const[isApproved,setIsApproved]=useState(true);
  console.log(addon);
  const handleReject=async()=>{
    const response=await axios.delete(`http://localhost:8080/api/events/${event.id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    });
    event.approval="reject";
    const response2=await axios.put(`http://localhost:8080/api/events/${event.id}`,event,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    window.location.reload();
  }
  
  const handleApprove=async()=>{
    setIsApproved(false);
    event.approval="approve";
    const response2=await axios.put(`http://localhost:8080/api/events/${event.id}`,event,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
  }
  return (
    <div className="booked-event-card">
      <div className="event-info">
        <h2>{event.eventName}</h2>
        <p><strong>Name:</strong>   {event.name}</p>
        <p><strong>Email:</strong>   {event.email}</p>
        <p><strong>From Date:</strong>   {event.fromDate}</p>
        <p><strong>To Date:</strong>   {event.toDate}</p>
        <p><strong>Amount:</strong>  ₹{event.totalAmount}</p>
        <p><strong>Venue:</strong>    {event.venue}</p>
        <p><strong>Attendees:</strong>   {event.attendees}</p>
        <p><strong>Add-ons:</strong> {addon.map((element, index) => (
        <span key={index}>{element}, </span>
      ))}</p>
        
      </div>
      {isApproved &&
      <div className="buttons">
        <button className="enquiry-button" onClick={handleApprove} style={{backgroundColor:"green"}}>Approve</button>
        <button className="invoice-button" onClick={handleReject} style={{backgroundColor:"red"}}>
         Reject
        </button>
      </div>
 }
    </div>
  );
};

AdminBookCards.propTypes = {
    event: PropTypes.shape({
      id: PropTypes.number.isRequired,
      eventName: PropTypes.string.isRequired,
      fromDate: PropTypes.string.isRequired,
      totalAmount: PropTypes.number.isRequired,
      venue: PropTypes.string.isRequired,
      attendees: PropTypes.number.isRequired,
      addon: PropTypes.string.isRequired,
      
    }).isRequired,
  };
export default AdminBookCards
;
