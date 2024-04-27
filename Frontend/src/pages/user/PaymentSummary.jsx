import { useState } from 'react';
import '../../assets/css/PaymentSummary.css'; // Import your CSS file with advanced styles
import { useEffect } from 'react';

function PaymentSummary() {
  const [formData, setFormData] = useState({});
  const [addons, setAddons] = useState([]);
  const [eventdata, setEventdata] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    const storedAddons = JSON.parse(sessionStorage.getItem("Addons"));
    const storedEvent = JSON.parse(sessionStorage.getItem("event"));
    setFormData(storedFormData);
    setAddons(storedAddons);
    setEventdata(storedEvent);
  }, []);

  const calculateTotalPrice = () => {
    if (!eventdata || !eventdata.price) {
      return 0; 
    }

    let totalPrice = parseFloat(eventdata.price);

    addons.forEach((addon) => {
      const priceRange = addon.price;
      totalPrice += parseFloat(priceRange.replace('₹', ''));
    });

    const grandTotal = parseFloat(totalPrice) + parseFloat(totalPrice * 0.1); 
    sessionStorage.setItem("grandTotal", grandTotal.toFixed(2)); 
    console.log(sessionStorage.getItem("grandTotal"));

    return grandTotal.toFixed(2);
  };

  return (
    <div className="payment-summary">
      <h1>Payment Summary</h1>
      <div className="summary-details">
        <div className="detail">
          <span className="label">Name:</span>
          <span>{formData.name}</span>
        </div>
        <div className="detail">
          <span className="label">Event Name:</span>
          <span>{eventdata.name}</span>
        </div>
        <div className="detail">
          <span className="label">Venue:</span>
          <span>{formData.venue}</span>
        </div>
        <div className="detail">
          <span className="label">From Date:</span>
          <span>{formData.fromDate}</span>
        </div>
        <div className="detail">
          <span className="label">To Date:</span>
          <span>{formData.toDate}</span>
        </div>
        <div className="detail">
          <span className="label">Selected Event Price:</span>
          <span>${eventdata.price}</span>
        </div>
        <div className="detail addons">
          <span className="label">Selected Addons:</span>
          <ul>
            {addons.map((addon, index) => (
              <li key={index}>
                {addon.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="total-price">
        <h2>Total Amount Breakdown</h2>
        <div className="breakdown">
          <span>Event Price:</span>
          <span>₹{eventdata.price}</span>
        </div>
        <div className="breakdown">
          <div id="addon-disp">
          <span>Addons:</span>
          <div id="list-add1">
            {addons.map((addon, index) => (
              <div id="list-item-payment" key={index}>
                <span>{addon.name}: </span>
              </div>
            ))}
          </div>
          </div>
          <div id="addon-price">
          <div id="list-add2">
            {addons.map((addon, index) => (
              <div id="list-item-payment" key={index}>
                <span>₹{addon.price}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
        <div className="breakdown">
          <span>Total Price:</span>
          <span>₹{calculateTotalPrice()}</span>
        </div>
        <div className="breakdown">
          <span>Taxes (10%):</span>
          <span>₹{(calculateTotalPrice() * 0.1).toFixed(2)}</span>
        </div>
        <div className="breakdown grand-total">
          <span>Grand Total:</span>
          <span>₹{sessionStorage.getItem("grandTotal")}</span> {/* Display grand total from session storage */}
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary;
