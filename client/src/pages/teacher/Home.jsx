import React from 'react';
import BugReport from './image/BugReport.png';
import CampusMap from './image/CampusMap.png';
import ChangePassword from './image/ChangePassword.png';
import ClassroomBooking from './image/ClassroomBooking.png';
import CourseTeaching from './image/CourseTeaching.png';
import Logout from './image/Logout.png';
import SpecialAddDrop from './image/SpecialAddDrop.png';
import CourseUpdate from './image/CourseUpdate.png';
import GradeUpdate from './image/GradeUpdate.png';
import { Link, useNavigate } from "react-router-dom";

const TeacherHome = () => {
    const images = [
        CourseUpdate, GradeUpdate, ChangePassword, SpecialAddDrop, BugReport, ClassroomBooking, CampusMap, CourseTeaching
        , Logout
    ];

    const navigate = useNavigate();

    const handleClick = (index) => {
        
        switch (index) {
          case 0:
            // navigate to CourseUpdate
            
            break;
          case 1:
            // navigate to GradeUpdate
            
            break;
          case 2:
            // navigate to ChangePassword
            navigate("/ChangePassword");
            break;
          case 3:
            // navigate to SpecialAddDrop
            
            break;
          case 4:
            // navigate to BugReport
            navigate("/BugReport");
            break;
          case 5:
            // navigate to ClassroomBooking
            
            break;
          case 6:
            // open new tab to CampusMap
            window.open('https://www.cuhk.edu.hk/chinese/campus/cuhk-campus-map.html', '_blank');
            break;
          case 7:
            // navigate to CourseTeaching
            
            break;
          case 8:
            // Log out
            navigate('/login');
            break;
          default:
            break;
        }
    };

    return (
        <div className="studentHome">
            <h1>Teacher homepage</h1>
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

export default TeacherHome;