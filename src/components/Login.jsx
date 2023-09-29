import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
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
        navigate("/login");
      });
  }, [navigate]);

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((user) => {
        localStorage.setItem("token", user.data.token);
        console.log("User is successfully login...");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  };
  return (
    <div>
      <h2>Login Page</h2>
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
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
