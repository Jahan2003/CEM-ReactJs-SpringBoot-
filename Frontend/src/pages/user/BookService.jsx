import CustomStepper from '../../components/Stepper';
import Navbar from '../../components/navbar';
import { useState, useEffect } from 'react';
import "../../assets/css/BookService.css";
import "../../assets/css/EventForm.css";
import EventList from '../../components/EventListings';
import EventBookingForm from './EventForm';
import Footer from '../footer';
import AddOn from './Add-on';
import PaymentSummary from './PaymentSummary';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookService() {
  
  
  const steps = [
    { label: 'Select Event' },
    { label: 'Event Details' },
    { label: 'Add-Ons/Customization' },
    { label: 'Booking Confirmation' },
    { label: 'Payment' }
  ];
  
  const [rpayid,setRpayid]=useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [addonList,setAddonList]=useState([]);
  const navigate=useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    mobile: '',
    city: '',
    venue: '',
    fromDate: '',
    toDate: '',
    attendees: '',
    enquiry: '',
    otherDetails: '',
  });

  // Form errors state
  const [errors, setErrors] = useState({});

  // Form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  // File change handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, themeFile: file });
  };

  // Function to handle adding addon
  const handleAddAddon = (addon) => {
    // Filter out the selected addon from the addonsList
    const updatedAddonsList = addonList.filter((item) => item !== addon);
    setSelectedAddons([...selectedAddons, addon]);
    setAddonList(updatedAddonsList);
  };

  // Function to handle removing addon
  const handleRemoveAddon = (index) => {
    const updatedSelectedAddons = [...selectedAddons];
    updatedSelectedAddons.splice(index, 1);
    setSelectedAddons(updatedSelectedAddons);
  };

  // Function to handle event submission
  const handleEventsubmission = () => {
    const newErrors = {};
    if (!selectedEventIndex) {
      newErrors.event = 'Please select an event';
      setErrors(newErrors);
      return;
    }
      
    console.log("Event selected " + selectedEventIndex);
    setActiveStep(activeStep + 1);
  };

  // Function to handle event select
  const handleEventSelect = (index) => {
    setSelectedEventIndex(index);
  };
  const handleAddonSubmit=()=>{
    sessionStorage.setItem("Addons",JSON.stringify(selectedAddons));
    setActiveStep(activeStep+1);
  }
  const amt=sessionStorage.getItem("grandTotal");
  // const amtInCents = Math.max(parseFloat(amt) * 100, 50);
  const handlePayment=async()=>{
    console.log(amt);
    var options = {
      key: "rzp_test_MeHeeWqjrjme9f",
      key_secret:"l1BOyt2tFaicJM4hUccFmYNL",
      amount: 12000*100,
      currency:"INR",
      name:"EVENTIFY",
      description:"Payment page",
      handler: function(response){
        setRpayid(response.razorpay_payment_id);
      },
      prefill: {
        name:formData.name,
        email:formData.email,
        contact:formData.mobile
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#5d5fe7"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
    const event=JSON.parse(sessionStorage.getItem("event"));
    const addon=JSON.stringify(JSON.parse(sessionStorage.getItem("Addons")).map((addon)=>addon.name));
    
    
    try{
     const response=await axios.post("http://localhost:8080/api/events",{
      name: formData.name,
      organization: formData.organization,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
      venue: formData.venue,
      fromDate: formData.fromDate,
      toDate: formData.toDate,
      attendees: formData.attendees,
      eventName:event.name ,
      totalAmount:amt,
      addon:addon,
      userId:sessionStorage.getItem("userId"),
      approval:null
     },
     {
      headers:{
        "Authorization":`Bearer ${token}`
      }
     }) 
     sessionStorage.removeItem("grandTotal");
     console.log(response.data);
    }catch(error){
      console.log("Error in posting the data",error);
    }
  }
  // Function to handle form submission
  const handleSubmit = async () => {
    // Validation logic
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Please enter your organization name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile number';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
    }
    if (!formData.venue.trim()) {
      newErrors.venue = 'Please enter your venue';
    }
    if (!formData.fromDate.trim()) {
      newErrors.fromDate = 'Please select the start date';
    }
    if (!formData.toDate.trim()) {
      newErrors.toDate = 'Please select the end date';
    }
    if (!formData.attendees.trim()) {
      newErrors.attendees = 'Please enter the number of attendees';
    } else if (!/^\d+$/.test(formData.attendees)) {
      newErrors.attendees = 'Please enter a valid number';
    }
  
    // Check for venue availability
    try {
      const response = await axios.get('http://localhost:8080/api/events',{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      const overlappingEvents = response.data.filter(event =>
        event.venue === formData.venue &&
        ((event.fromDate <= formData.fromDate && event.toDate >= formData.fromDate) ||
        (event.fromDate <= formData.toDate && event.toDate >= formData.toDate) ||
        (event.fromDate >= formData.fromDate && event.toDate <= formData.toDate))
      );
      console.log(overlappingEvents);
      if (overlappingEvents.length > 0) {
        newErrors.venue = 'The venue is already booked for the selected dates';
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  
    if (Object.keys(newErrors).length === 0) {
      // If no errors, proceed with form submission
      console.log('Form submitted:', formData);
      const d = JSON.stringify(formData);
      localStorage.setItem("formData", d);
      setActiveStep(activeStep + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const token=sessionStorage.getItem("token");
  useEffect(() => {
    const fetchAddons = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/addons',{
          headers:{
            "Authorization":`Bearer ${token}`
          }
        });
        setAddonList(response.data);
      } catch (error) {
        console.error('Error fetching addons:', error);
      }
    };

    fetchAddons();
  }, []);
  useEffect(() => {
    if (rpayid) {
      navigate('/services');
    }
  }, [rpayid, navigate]);
  return (
    <>
      <Navbar/>
      <div id="stepper-comp">
        <div id="stepper-div">
          <CustomStepper steps={steps} activeStep={activeStep}/>
        </div>
        <div id="display-comp">
          {activeStep === 0 && <EventList handleEventSelect={handleEventSelect} selectedEventIndex={selectedEventIndex} errors={errors}/>}
          {activeStep === 1 && (
            <EventBookingForm
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
            />
          )}
          {activeStep === 2 && (
            <AddOn
              addonList={addonList}
              selectedAddons={selectedAddons}
              handleAddAddon={handleAddAddon}
              handleRemoveAddon={handleRemoveAddon}
            />
          )}
          {activeStep === 3 && <PaymentSummary />}
        </div>
        <div id="stepper-button-div" style={{ padding: '20px' }}>
          {activeStep !== 0 && activeStep !== steps.length - 1 && (
            <button className="stepper-button" onClick={() => setActiveStep(activeStep - 1)}>
              Previous
            </button>
          )}
          {activeStep === 0 && (
            <button className="stepper-button" onClick={handleEventsubmission}>
              Next
            </button>
          )}
          {activeStep === 1 && (
            <button className="stepper-button" onClick={handleSubmit}>
              Next
            </button>
          )}
          {activeStep === 2 && (
            <button className="stepper-button" onClick={handleAddonSubmit}>
              Next
            </button>
          )}
          {activeStep === 3 && (
            <button className="stepper-button" onClick={handlePayment}>
              Proceed to Pay
            </button>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}

BookService.displayName = 'BookService';
export default BookService;
