import "../../assets/css/Package.css";
import Navbar from '../../components/navbar';
import { Link } from "react-router-dom";
const PackageCards = () => {
  // Sample package data
  const packages = [
    {
      id: 1,
      name: 'Basic',
      benefits: [
        '50-100 attendees',
        'Standard support',
        'Access to basic features',
        'Limited customization',
      ],
      price: 'Rs.20,000',
    },
    {
      id: 2,
      name: 'Gold',
      benefits: [
        '100-200 attendees',
        'Priority support',
        'Access to advanced features',
        'Moderate customization',
      ],
      price: 'Rs.50,000',
    },
    {
      id: 3,
      name: 'Premium',
      benefits: [
        'Unlimited attendees',
        '24/7 premium support',
        'Access to premium features',
        'Full customization',
      ],
      price: 'Rs.1,00,000',
    },
  ];

  return (
    <>
    <Navbar/>
    <div id="package-con">
        <div id="package-title">
            <p>Choose Package</p>
        </div>
    <div className="package-cards-container">
      {packages.map((packagea) => (
        <div key={packagea.id} className="package-card">
          <h3 id="package-type">{packagea.name}</h3>
          <div className="benefits">
            <ul>
              {packagea.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div id="comb">
          <div id="start-price">
          <p >Starting Price: {packagea.price}</p>
          </div>
          <Link to="/EventForm">
          <div id="pack-sub"><button>Select</button></div>
          </Link>
        </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default PackageCards;
