import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
}
