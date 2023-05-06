//Teacher home page

import React from 'react';
import BugReport from './image/BugReport.png';
import CampusMap from './image/CampusMap.png';
import ChangePassword from './image/ChangePassword.png';
import ClassroomBooking from './image/ClassroomBooking.png';
import CourseTeaching from './image/CourseTeaching.png';
import Logout from './image/Logout.png';
import SpecialAddDrop from './image/SpecialAddDrop.png';
import CourseUpdate from './image/CourseUpdate.png';
import GradeUpload from './image/GradeUpload.png';
import { useNavigate } from "react-router-dom";

const TeacherHome = () => {
    //images for teacher functions
    const images = [
        CourseUpdate, GradeUpload, ChangePassword, SpecialAddDrop, BugReport, ClassroomBooking, CampusMap, CourseTeaching
        , Logout
    ];

    const navigate = useNavigate();

    const handleClick = (index) => {
        
        switch (index) {
          case 0:
            // navigate to page 1
            navigate("/teacher/CourseUpdate")
            break;
          case 1:
            // navigate to page 2
            navigate("/teacher/GradeUpload")
            break;
          case 2:
            // navigate to page 3
            navigate("/ChangePassword")
            break;
          case 3:
            // navigate to page 4
            navigate("/teacher/SpecialAddDrop")
            break;
          case 4:
            // navigate to page 5
            navigate("/BugReport")
            break;
          case 5:
            // navigate to page 6
            navigate("/teacher/ClassroomBooking");
            break;
          case 6:
            // navigate to page 7
            window.open('https://www.cuhk.edu.hk/chinese/campus/cuhk-campus-map.html', '_blank');
            break;
          case 7:
            navigate("/teacher/CourseTeaching")
            break;
          case 8:
            // navigate to Log in page and clear localStorage
            localStorage.clear();
            navigate("/login")
            break;
          default:
            break;
        }
    };

    return (
        <div className="teacherHome">
            <h1>Teacher Homepage</h1>
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

export default TeacherHome;