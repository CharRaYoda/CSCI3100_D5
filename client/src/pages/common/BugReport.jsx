import React from 'react';
import './BugReport.css';

function BugReport() {
  const emailList = [
    'DeveloperTeam@cse.cuhk.edu.hk',
  ];

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
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
    </div>
  );
}

export default BugReport;
