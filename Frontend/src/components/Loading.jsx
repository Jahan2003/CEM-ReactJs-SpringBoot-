import '../assets/css/Loading.css'; // Import the CSS file for styling
import loading from "../assets/images/infinity-load.gif";
function Loading() {
  return (
    <div className="loading-container">
      <img src={loading} alt="Loading..." className="loading-icon" />
    </div>
  );
}

export default Loading;
