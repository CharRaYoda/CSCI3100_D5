import React from 'react';
import Profile from './image/Profile.png';
import CourseBrowsing from './image/CourseBrowsing.png';
import ChangePassword from './image/ChangePassword.png';
import CampusMap from './image/CampusMap.png';
import BugReport from './image/BugReport.png';
import LogOut from './image/LogOut.png';
import { Link, useNavigate } from "react-router-dom";

const StudentHome = () => {
    const images = [
        Profile, CourseBrowsing, ChangePassword, CampusMap, BugReport, LogOut
    ];

    const navigate = useNavigate();

    const handleClick = (index) => {
        
        switch (index) {
          case 0:
            // navigate to page 1
            break;
          case 1:
            // navigate to page 2
            break;
          case 2:
            // navigate to page 3
            break;
          case 3:
            // navigate to page 4
            break;
          case 4:
            // navigate to page 5
            break;
          case 5:
            // navigate to page 6
            
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