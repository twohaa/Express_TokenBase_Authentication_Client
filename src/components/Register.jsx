import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => navigate("/profile"))
      .catch((err) => {
        navigate("/register");
      });
  }, [navigate]);

  const handleRegister = () => {
    axios
      .post("http://localhost:5000/register", { username, password })
      .then(() => {
        console.log("User is registered...");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        navigate("/register");
      });
  };
  return (
    <div>
      <h2>Register Page</h2>
      <input
        type="text"
        placeholder="Username: "
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      <input
        type="password"
        placeholder="Password: "
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}
