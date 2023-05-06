//Login page

//imports
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  //states for roles
  const roles = ["select", "student", "teacher", "admin"];
  const [inputs, setInputs] = useState({
    uid:"",
    password:"",
    role:roles[0],
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  //state change handle function
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  //submit handle function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);

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
      <h1>Course Selection System</h1>
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

        <select
          name="role"
          onChange={handleChange}>
            {roles.map((role) => (
              <option value={role} key={role}>
                {role}
              </option>
            ))}
        </select>

        <span>
          <Link to="/ContactAdmin">Contact Admin</Link>
        </span>

        <span>
          <Link>Forget Password</Link>
        </span>
        
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          <Link to="/register">Register</Link>{/*path in App.js*/} 
        </span>
      </form>
    </div>
  );
};

export default Login;