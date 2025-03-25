import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Mentors from "./components/Mentors";
import Library from "./components/Library";
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import ForgotPassword from "./components/ForgotPassword";
import Engineering from "./components/Engineering";
import Medical from "./components/Medical";
import Science from "./components/Science";
import Mathematics from "./components/Mathematics";
import Economics from "./components/Economics";
import Sports from "./components/Sports";
import Food from "./components/Food";
import Government from "./components/Government";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/library" element={<Library />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/medical" element={<Medical />} />
        <Route path="/science" element={<Science />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/food" element={<Food />} />
        <Route path="/government" element={<Government />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/forgot-password" element={<ForgotPassword/>  } />         
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
