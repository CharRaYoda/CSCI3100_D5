import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function ContactAdmin() {
  const emailList = [
    'anthonytam721@cse.cuhk.edu.hk',
    'samhui261@cse.cuhk.edu.hk',
    'vincentchan315@cse.cuhk.edu.hk',
  ];

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="contact-admin-container">
      <h1>Contact Admin</h1>
      <p>Contact the administrators for more help.</p>
      <p>Click on any of the hyperlinks below to start an email.</p>
      <ul>
        {emailList.map((email) => (
          <li key={email}>
            <a href={`mailto:${email}`} onClick={() => handleEmailClick(email)}>{email}</a>
          </li>
        ))}
      </ul>
      <span>
        <Link to="/login">Go Back</Link>{/*path in App.js*/} 
      </span>
    </div>
  );
}

export default ContactAdmin;
