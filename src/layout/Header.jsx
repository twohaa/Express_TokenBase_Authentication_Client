import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/register">Register</Link> &nbsp;
      <Link to="/login">Login</Link> &nbsp;
      <Link to="/profile">Profile</Link> &nbsp;
    </nav>
  );
}
