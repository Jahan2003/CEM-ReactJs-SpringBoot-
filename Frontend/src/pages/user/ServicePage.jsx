  import { useState, useEffect } from 'react';
  import Navbar from '../../components/navbar';
  import Footer from '../footer';
  import { Link } from 'react-router-dom';
  import "../../assets/css/ServicePage.css";
  import axios from 'axios';

  function ServicePage() {
      const [serviceData, setServiceData] = useState(null);
      const token=sessionStorage.getItem("token");
      const id=1;
      const fetchServiceData = async () => {
        try {
          const response= await axios.get(
            `http://localhost:8080/services/${id}`, 
            {
              headers:{
                "Authorization":`Bearer ${token}`,
              },
            }
          )
            const data = response.data;
            console.log(data);
            setServiceData(data);
        } catch (error) {
            console.error('Error fetching service data:', error);
        }
    };
    useEffect(() => {
      fetchServiceData();
  }, []);
      return (
          <>
              <Navbar />
              <div className="service-page">
                  {serviceData &&
                      <>
                          <div className="header-container">
                          <div className="header-image"></div>
                          <div className="overlay"></div>
                          <div className="centered-text">
                                  <h1>{serviceData.title}</h1>
                                <p>Explore our range of Services tailored to your professional development needs</p>
                               </div>
                          </div>
                          <div className="service-description">
                                <h2 style={{color:"#5d5fe7"}}>{serviceData.title}</h2>
                                <p>At Eventify, we specialize in meticulously organizing conferences and meetings that exceed expectations and leave a lasting impression on your audience. With our extensive expertise in corporate event management, we understand the significance of these gatherings in fostering collaboration, sharing knowledge, and driving business growth.</p>
                              {serviceData.subtopics.map((subtopic, index) => (
                                  <div key={index}>
                                      <h3 className="event-desc-sub">{subtopic}</h3>
                                      <p>{serviceData.descriptions[index]}</p>
                                  </div>
                              ))}
                          </div>
                          <div id="event-desc-book">
                              <Link to="/BookService">
                                  <button>Book Now</button>
                              </Link>
                          </div>
                      </>
                  }
              </div>
              <Footer />
          </>
      );
  }

  export default ServicePage;
