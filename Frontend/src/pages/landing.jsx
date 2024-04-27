import "../assets/css/landing.css";
// import { useEffect, useRef, useState } from "react"; 
import conf from "../assets/images/conf.jpg";
import clogo1 from "../assets/images/clogo1.png";
import { Link } from "react-router-dom";
import clogo2 from "../assets/images/clogo2.png";
import clogo3 from "../assets/images/clogo3.png";
import clogo4 from "../assets/images/clogo4.png";
import clogo5 from "../assets/images/clogo5.png";
// import clogo6 from "../assets/images/clogo6.png";
// import clogo7 from "../assets/images/clogo7.png";
import Footer from "./footer";
import NavbarLan from "../components/navbarlan";
function Landing() {
  return (
    <div id="main-con">
      <NavbarLan/>
      <div id="image-con">
        <img src={conf} alt="" />
        <div id="image-overlay"></div>
        <div id="image-text">
          <span className="quotes">"</span>Crafting unforgettable 
          experiences, one event at a time.<span className="quotes">"</span>
        </div>
        <div id="buttons-sec">
            <Link to="/login"><div id="book-events">Book Events</div></Link>
            <div id="get-started">View More</div>
        </div>
      </div>
      <div id="about-us">
        <div id="about-title">Welcome to Eventify</div>
        <div id="about-desc">

An event is reflective of who you are. Whether it is a private event or a corporate one, we craft theevents of your dreams. Our reputation as the fastest-growing event management company in South India speaks for itself. We are a creative-led experiential event production company that offers masterful events to our private and corporate clients, offering them a sublime connection betweenawe-worthy creativity and logistical mastery.<br/><br/>

We are tastemakers, and with each event we ideate, we set the standard for trends in A-list events for years to come. With a unique blend of compelling storytelling, impactful design strategies,
transparent pricing, and integrated experiential technology,  Eventify has transformed and revolutionised the scope of traditional event planning.<br/><br/>

Our events are completely customized, reflecting the distinctive personality of every client we take on. Whether we craft events for a family, a product, a company or a cause, our work embraces a deep
sense of responsibility towards sustainability. We are committed to constantly reducing our carbon
footprint, recycling, reusing, donating props whenever possible, and working with like-minded brands
and suppliers supporting our philosophy.<br/><br/>

Welcome to the art of creative luxury event management.
</div>
      </div>
      <div id="clients">
        <div id="clients-title">Our Clients</div>
        <div className="grid-container">
  <div className="box"><img src={clogo1} alt="" /></div>
  <div className="box"><img src={clogo2} alt="" /></div>
  <div className="box"><img src={clogo3} alt="" /></div>
  <div className="box"><img src={clogo4} alt="" /></div>
  <div className="box"><img src={clogo5} alt="" /></div>
</div>
      </div>
      <div id="our-service">
        <div id="service-title">Our Services</div>
      <div className="grid-container1">
  <div className="box1">
    <div className="title-box">
    Conferences and Seminars
    </div>
    <div className="box-desc">
    Organizing large-scale conferences and seminars for companies 
    to showcase their expertise, network with industry professionals, 
    and share knowledge with attendees.
    </div>
  </div>
  <div className="box1">
  <div className="title-box">
  Product Launches
    </div>
    <div className="box-desc">
    Assisting companies in launching new products or services by creating impactful 
    launch events that generate buzz and media coverage.
    </div>
  </div>
  <div className="box1">
  <div className="title-box">
  Corporate Meetings and Workshops
    </div>
    <div className="box-desc">
    Managing corporate meetings, workshops, and training sessions to facilitate communication, collaboration, 
    and learning among employees and stakeholders.
    </div>
  </div>
  <div className="box1">
  <div className="title-box">
  Travel Programs
    </div>
    <div className="box-desc">
    Creating custom-designed incentive travel programs to reward top-performing employees 
    or clients with memorable travel experiences.
    </div>
  </div>
</div>
      </div>
      <Footer/>
    </div>
  );
}

export default Landing;
