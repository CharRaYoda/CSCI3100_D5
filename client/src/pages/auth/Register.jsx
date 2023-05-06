//Register page

//imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  //state for roles
  const roles = ["select", "student", "teacher", "admin"];
  const [inputs, setInputs] = useState({
    uid:"",
    password:"",
    name:"",
    email:"",
    role:roles[0],
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  //state change handle function
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  //submit handle function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/Login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Course Selection System</h1>
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
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />

        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />

        <select
          name="role"
          onChange={handleChange}>
            {roles.map((role) => (
              <option value={role} key={role}>
                {role}
              </option>
            ))}
        </select>
        
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          <Link to="/login">Login</Link>{/*path in App.js*/} 
        </span>
      </form>
    </div>
  );
};

export default Register;