import { useState, useEffect } from 'react';
import axios from 'axios';
import InquiryCard from '../../components/InquiryCard';
import NavbarHr from '../../components/navbarHr';
import Footer from '../footer';
import "../../assets/css/inquiryList.css"

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetchInquiries();
  }, []);
  const token=sessionStorage.getItem("token");
  const fetchInquiries = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/enquiries',{
        headers:{
            Authorization:`Bearer ${token}`,
        }
      });
      setInquiries(response.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };

  const handleReply = async (inquiryId, email) => {
    window.open(`mailto:${email}?subject=Reply to Inquiry ${inquiryId}`);
    
    // Remove the inquiry from the UI
    setInquiries(inquiries.filter(inquiry => inquiry.id !== inquiryId));

    // Make API call to remove inquiry from backend
    try {
      await axios.delete(`http://localhost:8080/api/enquiries/${inquiryId}`,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
      });
    } catch (error) {
      console.error('Error deleting inquiry:', error);
    }
  };

  return (
    <>
    <NavbarHr/>
    <div id="Enquiry-con">
    <div id="con-title">
        <p>Enquiries</p>
    </div>
    <div className="inquiry-list">
      {inquiries.map(inquiry => (
        <InquiryCard key={inquiry.id} inquiry={inquiry} onReply={()=>handleReply(inquiry.id,inquiry.email)} />
      ))}
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default InquiryList;
