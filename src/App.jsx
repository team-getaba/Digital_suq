import { BrowserRouter } from "react-router-dom";

import Navbar from "./component/Navbars";
import Hero from "./component/Hero";
import Features from "./component/Features.jsx";
import Testimonial from "./component/Testimonial";
import CallToAction from "./component/CallToAction";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import Plan from "./component/plan";
import SubscriptionPlanTwo from "./pages/plan_2";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      {/* <Testimonial /> */}
      <SubscriptionPlanTwo />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
