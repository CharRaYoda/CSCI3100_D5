//Admin Home Page

//imports
import React from 'react';
import EnrollmentSetting from './image/EnrollmentSetting.png';
import ChangePassword from './image/ChangePassword.png';
import ViewEditCourse from './image/ViewEditCourse.png';
import ViewEditUser from './image/ViewEditUser.png';
import BugReport from './image/BugReport.png';
import LogOut from './image/LogOut.png';
import { useNavigate } from "react-router-dom";


const AdminHome = () => {
    // images for admin functions
    const images = [
        EnrollmentSetting, ViewEditUser, ViewEditCourse, ChangePassword, BugReport, LogOut
    ];

    const navigate = useNavigate();

    // Handles the click event on each image
    const handleClick = (index) => {
        
        switch (index) {
            case 0:
                // Navigate to Enrollment Setting page
                navigate('/admin/EnrollmentSetting');
                break;
            case 1:
                // Navigate to View/Edit User page
                navigate('/admin/ViewEditUsers');
                break;
            case 2:
                // Navigate to View/Edit Course page
                navigate('/admin/ViewEditCourses');
                break;
            case 3:
                // Navigate to Change Password page
                navigate('/ChangePassword');
                break;
            case 4:
                // Navigate to Bug Report page
                navigate('/BugReport');
                break;
            case 5:
                // Navigate to Log in page and clear localStorage
                localStorage.clear();
                navigate('/login');
                break;
            default:
                break;
        }
    };

    return (
        <div className="adminHome">
            <h1>Admin Home</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
                    {/* Display admin functions in home page */}
                    {images.map((image, index) => (
                    <img
                        key={index}
                        alt='error loading, try refreshing'
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

export default AdminHome;