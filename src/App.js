import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import AdminLogin from "./pages/AdminLogin";
import SignUp from "./pages/SignUp";
import AddJob from "./pages/AddJob";
import ApplicationList from "./pages/ApplicationList";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/application-list" element={<ApplicationList />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer /> {/* Add the Footer component here */}
    </Router>
  );
}

export default App;