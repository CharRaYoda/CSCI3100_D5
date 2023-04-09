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
          case 6:
          case 7:
          case 8:
            
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