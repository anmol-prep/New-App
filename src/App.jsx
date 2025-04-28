import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FindJob from "./pages/FindJob";
import HireTalent from "./pages/HireTalent";
import Blog from "./pages/Blog";
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Header />
      <div className="pt-[80px]"> {/* This adds space at the top for the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FindJob" element={<FindJob />} />
          <Route path="/HireTalent" element={<HireTalent />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
