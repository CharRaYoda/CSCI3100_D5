import React, { useState } from "react";
import { useContext } from "react";
//import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    uid:"",
    password:"",
    role:"",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  //const { login } = useContext(AuthContext);

  //state change handle function
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/login", inputs);

      if (inputs.role === "student"){
        navigate("/student/home");
      } else if (inputs.role === "teacher"){
        navigate("/teacher/home");
      } else if (inputs.role === "admin"){
        navigate("/admin/home");
      } else {
        setError("Not an eligible role.");
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
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
          placeholder="role"
          name="role"
          onChange={handleChange}
        />
        
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          <Link to="/Register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
