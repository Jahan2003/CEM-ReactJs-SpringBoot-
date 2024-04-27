import { useEffect } from 'react';
import '../../assets/css/Addons.css';
import PropTypes from "prop-types";

function AddOn({addonList, selectedAddons, handleAddAddon, handleRemoveAddon }) {

  const renderAddons = () => {
    return selectedAddons.map((addon, index) => (
      <div className="addon" key={index}>
        <div className="addon-details">
          <span>{addon.name}</span>
          <span style={{ color: "black" }}>₹{addon.price}</span>
          <p>{addon.description}</p>
        </div>
        <button onClick={() => handleRemoveAddon(index)}>Remove</button>
      </div>
    ));
  };
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="App">
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
              <button onClick={() => handleAddAddon(addon)}>Add</button>
            </div>
          ))}
        </div>
        <div className="selected-addons">
          <h2>Selected Addons</h2>
          {renderAddons()}
        </div>
      </div>
    </div>
  );
}

export default AddOn;

AddOn.propTypes = {
  selectedAddons: PropTypes.array.isRequired,
  handleAddAddon: PropTypes.func.isRequired,
  handleRemoveAddon: PropTypes.func.isRequired,
  addonList:PropTypes.array.isRequired
};
