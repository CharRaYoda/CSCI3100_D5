//change password page

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { AuthContext } from '../../context/authContext';

function ChangePassword() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [currentUid, setCurrentUid] = useState(currentUser.uid);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [isNewPasswordConfirmationValid, setIsNewPasswordConfirmationValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // change the current password
  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  // set the password for a new account
  const handleNewPasswordChange = (event) => {
    const value = event.target.value;
    setNewPassword(value);
  };

  // check if the re-entered new password matches the new password
  const handleNewPasswordConfirmationChange = (event) => {
    const value = event.target.value;
    setIsNewPasswordConfirmationValid(value === newPassword);
    setNewPasswordConfirmation(value);
  };

  // password change click handle function
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);
    try {
      const response = await axios.put('/users/updatePassword', {
        uid: currentUid,
        currentPassword: currentPassword,
        newPassword: newPassword,
        newPasswordConfirmation: newPasswordConfirmation,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
    }
    setIsLoading(false);
  };

  const handleGoBack = () => {
    if (currentUser.role === 'student') {
      navigate('/student/home');
    } else if (currentUser.role === 'teacher') {
      navigate('/teacher/home');
    } else if (currentUser.role === 'admin') {
      navigate('/admin/home');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="ChangePassword">
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="text"
            id="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="text"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newPasswordConfirmation">Confirm New Password:</label>
          <input
            type="text"
            id="newPasswordConfirmation"
            value={newPasswordConfirmation}
            onChange={handleNewPasswordConfirmationChange}
            required
          />
        </div>
        <button style={{ display: 'block', margin: '0 auto', marginTop: '20px', marginBottom: '20px', marginRight: '65px' }}
          type="submit" onClick={handleSubmit} disabled={!isNewPasswordConfirmationValid || isLoading}>
          {isLoading ? 'Loading...' : 'Confirm'}
        </button>
      </form>
      {message && (
        <div style={{ color: message.includes('Success') ? 'green' : 'red' }}>{message}</div>
      )}
      <span>
      <button onClick={handleGoBack}>Go back</button>{/*path in App.js*/} 
      </span>
    </div>
  );
}

export default ChangePassword;
