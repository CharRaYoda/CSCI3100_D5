//Contact admin page

import React, { useContext } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from '../../context/authContext';

function BugReport({ user }) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // developer's email
  const emailList = [
    'DeveloperTeam@cse.cuhk.edu.hk',
  ];

  //email click handle function
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
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
    <div className="bug-report-container">
      <h1>Report a Bug</h1>
      <p>Please report any bugs or issues you encounter while using our app.</p>
      <p>You may click the hyperlink provided below to start an email.</p>
      <ul>
        {emailList.map((email) => (
          <li key={email}>
            <a href={`mailto:${email}`} onClick={() => handleEmailClick(email)}>{email}</a>
          </li>
        ))}
      </ul>
      <span>
      <button onClick={handleGoBack}>Go back</button>{/*path in App.js*/} 
      </span>
    </div>
  );
}

export default BugReport;
