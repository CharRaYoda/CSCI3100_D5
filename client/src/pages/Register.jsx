import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  //state for input fields
  const [inputs, setInputs] = useState({
    uid:"",
    password:"",
    email:"",
    role:"",
  });
  //const [err, setError] = useState(null);

  //state change handle function
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res)
      //navigate("/login");
    } catch (err) {
      //setError(err.response.data);
      console.log(err)
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="userID"
          name="uid"
          onChange={handleChange}
        />

        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />

        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />

        <input
          required
          type="text"
          placeholder="role"
          name="role"
          onChange={handleChange}
        />
        
        <button onClick={handleSubmit}>Register</button>

        <span>
          <Link to="/Login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;