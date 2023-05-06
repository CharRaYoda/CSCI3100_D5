//Student home page

import React from 'react';
import Profile from './image/Profile.png';
import CourseBrowsing from './image/CourseBrowsing.png';
import ChangePassword from './image/ChangePassword.png';
import CampusMap from './image/CampusMap.png';
import BugReport from './image/BugReport.png';
import LogOut from './image/LogOut.png';
import { useNavigate } from "react-router-dom";

const StudentHome = () => {
    //images for student functions
    const images = [
        Profile, CourseBrowsing, ChangePassword, CampusMap, BugReport, LogOut
    ];

    const navigate = useNavigate();

    //handle function for clicking student functions
    const handleClick = (index) => {
        
        switch (index) {
          case 0:
            // navigate to profile
            navigate("/student/Profile");
            break;
          case 1:
            // navigate to course browsing
            navigate("/student/CourseBrowsing");
            break;
          case 2:
            // navigate to change password
            navigate("/ChangePassword");
            break;
          case 3:
            // open new tab to campus map
            window.open('https://www.cuhk.edu.hk/chinese/campus/cuhk-campus-map.html', '_blank');
            break;
          case 4:
            // navigate to bug report
            navigate("/BugReport");
            break;
          case 5:
            // navigate to Log in page and clear localStorage
            localStorage.clear();
            navigate("/login");
            break;
          default:
            break;
        }
    };

    return (
        <div className="studentHome">
            <h1>Student Home</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
                    {/* Display admin functions in home page */}
                    {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                        onClick={() => handleClick(index)}
                    />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentHome;