  import React, { Suspense} from "react";
  import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
  import ScrollToTop from "./components/ScrollToTop";
  import Loading from "./components/Loading";
import EnquiryForm from "./pages/user/EnquiryForm";
import EditEventForm from "./components/EditEventForm";
import AddEventForm from "./components/AddEventForm";
import BookedEvents from "./components/bookedEvents";
import InquiryList from "./pages/admin/InquiryList";
import UserProfileAd from "./pages/admin/userProfileAd";
import AddOnMod from "./pages/admin/AddonModify";
import EditAddonForm from "./components/EditAddonForm";
import AddAddonForm from "./components/AddAddonForm";

  const Login = React.lazy(() => import("./pages/login"));
  const Registration = React.lazy(() => import("./pages/Registration"));
  const Landing = React.lazy(() => import("./pages/landing"));
  const UserProfile = React.lazy(() => import("./pages/user/userProfile"));
  const Service = React.lazy(() => import("./pages/user/services"));
  const EventForm = React.lazy(() => import("./pages/user/EventForm"));
  const AddOn = React.lazy(() => import("./pages/user/Add-on"));
  const PaymentSummary = React.lazy(() => import("./pages/user/PaymentSummary"));
  const Bookings = React.lazy(() => import("./pages/user/Bookings"));
  const PackageCards = React.lazy(() => import("./pages/user/Packages"));
  const AdminPackageCards = React.lazy(() => import("./pages/admin/ServiceList"));
  const AdService = React.lazy(() => import("./pages/admin/Adservices"));
  const Dashboard = React.lazy(() => import("./pages/admin/Dashboard"));
  const UDashBoard = React.lazy(() => import("./pages/user/UDashBoard"));
  const AddEvent = React.lazy(() => import("./pages/admin/AddEvent"));
  const EventList = React.lazy(() => import("./components/EventListings"));
  const ServicePage = React.lazy(() => import("./pages/user/ServicePage"));
  const BookService = React.lazy(() => import("./pages/user/BookService"));

  function App() { 
    // const[loading,setLoading]=useState(true);
    // useEffect(()=>{
    //   const timeout=setTimeout(()=>{
    //      setLoading(false);
    //   },5000);

    //   return ()=>clearTimeout(timeout);
    // },[]);
    return (
      <Router>
        <ScrollToTop />
          <Routes>
          <Route path="/login" element={<Suspense fallback={<Loading/>}><Login /></Suspense>} />
        <Route path="/registration" element={<Suspense fallback={<Loading/>}><Registration /></Suspense>} />
        <Route path="/landing" element={<Suspense fallback={<Loading/>}><Landing /></Suspense>} />
        <Route path="/userProfile" element={<Suspense fallback={<Loading/>}><UserProfile /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<Loading/>}><Service /></Suspense>} />
        <Route path="/EventForm" element={<Suspense fallback={<Loading/>}><EventForm /></Suspense>} />
        <Route path="/AddOns" element={<Suspense fallback={<Loading/>}><AddOn /></Suspense>} />
        <Route path="/PaymentSummary" element={<Suspense fallback={<Loading/>}><PaymentSummary /></Suspense>} />
        <Route path="/Bookings" element={<Suspense fallback={<Loading/>}><Bookings /></Suspense>} />
        <Route path="/package" element={<Suspense fallback={<Loading/>}><PackageCards /></Suspense>} />
        <Route path="/Apackage" element={<Suspense fallback={<Loading/>}><AdminPackageCards /></Suspense>} />
        <Route path="/service" element={<Suspense fallback={<Loading/>}><AdService /></Suspense>} />
        <Route path="/Adashboard" element={<Suspense fallback={<Loading/>}><Dashboard /></Suspense>} />
        <Route path="/Udashboard" element={<Suspense fallback={<Loading/>}><UDashBoard /></Suspense>} />
        <Route path="/AddEvent" element={<Suspense fallback={<Loading/>}><AddEvent /></Suspense>} />
        <Route path="/EventList" element={<Suspense fallback={<Loading/>}><EventList /></Suspense>} />
        <Route path="/ServicePage" element={<Suspense fallback={<Loading/>}><ServicePage /></Suspense>} />
        <Route path="/BookService" element={<Suspense fallback={<Loading/>}><BookService /></Suspense>} />
        <Route path="/EnquiryForm" element={<Suspense fallback={<Loading/>}><EnquiryForm /></Suspense>} />
        <Route path="/Editform" element={<Suspense fallback={<Loading/>}><EditEventForm/></Suspense>} />
        <Route path="/Addform" element={<Suspense fallback={<Loading/>}><AddEventForm/></Suspense>} />
        <Route path="/BookedEvents" element={<Suspense fallback={<Loading/>}><BookedEvents/></Suspense>} />
        <Route path="/ViewEnquiry" element={<Suspense fallback={<Loading/>}><InquiryList/></Suspense>} />
        <Route path="/adminProfile" element={<Suspense fallback={<Loading/>}><UserProfileAd/></Suspense>} />
        <Route path="/addonView" element={<Suspense fallback={<Loading/>}><AddOnMod/></Suspense>} />
        <Route path="/EditAddon" element={<Suspense fallback={<Loading/>}><EditAddonForm/></Suspense>} />
        <Route path="/AddAddon" element={<Suspense fallback={<Loading/>}><AddAddonForm/></Suspense>} />


          </Routes>
      </Router>
    );
  }

  export default App;
