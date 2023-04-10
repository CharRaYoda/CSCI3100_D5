import React, { useState } from 'react';
import axios from 'axios';
import './ForgetPassword.css';
import { Link, useNavigate} from "react-router-dom";

const ForgetPassword = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/users/sendTempPassword', {
        uid: userId,
        email: email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Forget Password</h2>
        <div className="formGroup">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="submitButton">Submit</button>
        <p className="message">{message}</p>
        <span>
          <Link to="/login">Go Back</Link>{/*path in App.js*/} 
        </span>
      </form>
    </div>
  );
};

export default ForgetPassword;
