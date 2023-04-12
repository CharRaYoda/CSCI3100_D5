import React from 'react';
import EnrollmentSetting from './image/EnrollmentSetting.png';
import ChangePassword from './image/ChangePassword.png';
import ViewEditCourse from './image/ViewEditCourse.png';
import ViewEditUser from './image/ViewEditUser.png';
import BugReport from './image/BugReport.png';
import LogOut from './image/LogOut.png';
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
    //const images = [
    //    EnrollmentSetting, ViewEditUser, ViewEditCourse, ChangePassword, BugReport, LogOut
    //];

    const images = [
            ViewEditUser, ViewEditCourse, ChangePassword, BugReport, LogOut
        ];

    const navigate = useNavigate();

    const handleClick = (index) => {
        
        switch (index) {
            //case 0:
                // navigate to Enrollment Setting page
            //    navigate('/admin/EnrollmentSetting');
            //    break;
            case 0:
                // navigate to View/Edit User page
                navigate('/admin/ViewEditUsers');
                break;
            case 1:
                // navigate to View/Edit Course page
                navigate('/admin/ViewEditCourses');
                break;
            case 2:
                // navigate to Change Password page
                navigate('/ChangePassword');
                break;
            case 3:
                // navigate to Bug Report page
                navigate('/BugReport');
                break;
            case 4:
                // navigate to Log Out page
                localStorage.clear();
                navigate('/login');
                break;
            default:
                break;
        }
    };

    return (
        <div className="studentHome">
            <h1>Admin Home</h1>
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

export default AdminHome;