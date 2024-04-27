import "../../assets/css/Adservices.css";
import product from "../../assets/images/product.jpg";
import travel from "../../assets/images/travel.jpg";
import workshop from "../../assets/images/workshop.jpg";
import conference from "../../assets/images/conference.jpg";
import party from "../../assets/images/login1.jpg";
import Footer from "../footer";
import { Link, useNavigate } from "react-router-dom";
import NavbarHr from "../../components/navbarHr";

function AdService() {
  const cards = [
    {
      id: 1,
      imageUrl: conference,
      title: 'Conference & Meetings',
      description: 'Description for Card 1',
      link: '/conference',
    },
    {
      id: 2,
      imageUrl: workshop,
      title: 'Workshops',
      description: 'Description for Card 2',
      link: '/workshops'
    },
    {
      id: 3,
      imageUrl: product,
      title: 'Product launch',
      description: 'Description for Card 3',
      link: '/product-launch' 
    },
    {
      id: 4,
      imageUrl: travel,
      title: 'Team Outings',
      description: 'Description for Card 4',
      link: '/team-outings' // Add the link for Team Outings
    },
    {
      id: 5,
      imageUrl: party,
      title: 'Parties and Activities',
      description: 'Description for Card 5',
      link: '/parties-activities' // Add the link for Parties and Activities
    },
    // Add more cards as needed
  ];
  const navigate=useNavigate();
  const handleClick=(id)=>{
    sessionStorage.setItem("serviceId",id);
    navigate("/Apackage");
  }
  return (
    <>
      <NavbarHr/>
      <div id="services-corp">
        <div id="service-name">
          Services
        </div>
        <div className="card-grid">
          {cards.map((card) => (
            <div onClick={()=>handleClick(card.id)} key={card.id} className="card-link" >
              <div className="card">
                <img src={card.imageUrl} alt={card.title} className="card-image" />
                <div className="card-content">
                  <p className="card-title">{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdService;
