import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/student-login">Student Login</Link>
      <Link to="/admin-login">Admin Login</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/add-job">Add Job</Link>
      <Link to="/application-list">Application List</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/help">Help</Link>
    </nav>
  );
};

export default Navbar;