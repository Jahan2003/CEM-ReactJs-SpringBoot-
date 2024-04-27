import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/AddonModify.css';
import Footer from '../footer';
import NavbarHr from '../../components/navbarHr';
import { useNavigate } from 'react-router-dom';


function AddOnMod() {
  const [addonList, setAddonList] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    fetchAddons();
    window.scrollTo(0, 0);
  }, []);

  const token=sessionStorage.getItem("token");
  const fetchAddons = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/addons',{
        headers:{
            Authorization:`Bearer ${token}`
        }
      });
      setAddonList(response.data);
    } catch (error) {
      console.error('Error fetching addons:', error);
    }
  };

  const handleAddAddon = async () => {
    navigate("/AddAddon");
};

const handleEditAddon = async (addon) => {
    sessionStorage.setItem("addon-id",addon.id);
    navigate("/EditAddon");
  };

  const handleDeleteAddon = async (addon) => {
    try {
      await axios.delete(`http://localhost:8080/api/addons/${addon.id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      });
      setAddonList(addonList.filter(item => item.id !== addon.id));
    } catch (error) {
      console.error('Error deleting addon:', error);
    }
  };

  return (
    <>
    <NavbarHr/>
    <div className="App-mod">
      <div id="addon-title">
        <h1>Add-Ons / Customization</h1>
      </div>
      <div id="addon-content">
        <div className="addons-container">
          {addonList.map((addon, index) => (
            <div className="addon" key={index}>
              <div className="addon-details">
                <span>{addon.name}</span>
                <span style={{ color: "black", fontWeight: "bold" }}>₹{addon.price}</span>
                <p>{addon.description}</p>
              </div>
              <div className="buttons">
                <button onClick={() => handleEditAddon(addon)}>Edit</button>
                <button onClick={() => handleDeleteAddon(addon)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="add-addon">
      <button onClick={() => handleAddAddon()}>Add Addons</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AddOnMod;

