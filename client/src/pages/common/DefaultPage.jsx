// default page

import React from 'react';
import { Link, useNavigate} from "react-router-dom";

function CourseSelectionSystem() {
	// redirect to CUHK map
    const handleClick = () => {
        window.open('https://www.cuhk.edu.hk/chinese/campus/cuhk-campus-map.html', '_blank');
    }
    
  return (
    <div className="course-selection-system-container">
      <h1>Course Selection System</h1>
      <p>.</p>
      <ul className="course-selection-system-links">
        <li><a href="/login" className="course-selection-system-link">Login</a></li>
        <li><a href="/register" className="course-selection-system-link">Register</a></li>
        <li><Link onClick={handleClick} className="course-selection-system-link">CampusMap</Link></li>
        <li><a href="/ContactAdmin" className="course-selection-system-link">ContactAdmin</a></li>
      </ul>
    </div>
  );
}

export default CourseSelectionSystem;
