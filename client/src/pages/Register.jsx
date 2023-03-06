import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button>Register</button>

        <span>
          <Link to="/Login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;