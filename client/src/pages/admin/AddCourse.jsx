// Add Course Page
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Search from './image/Search.png';
import Del from './image/Delete.png';
import ReturnHome from './image/ReturnHome.png';
import { Link } from 'react-router-dom';

const AddCourse = () => {
    const [inputs, setInputs] = useState({});
    const [response, setResponse] = useState(null);
    const [err, setError] = useState(null);
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        let answer = window.confirm("Confirm to add the course: " + inputs.name + " ?");
        
        try {
            if (answer) {
                const resp = await axios.post('/courses', inputs);
                setResponse(resp.data);
                setError(null);
            }
        } catch (err) {
            setError(err.response.data);
            setResponse(null);
        }
    }

    return (
        <div className='AddCourse'>
            {/* Left side navigation menu */}
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
                <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {/* Search Courses link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={Search} alt="Search Courses" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/ViewEditCourses">Search Courses</Link>
                    </li>
                    {/* Delete Courses link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={Del} alt="Delete Courses" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/ViewEditCourses/DeleteCourses">Delete Courses</Link>
                    </li>
                    {/* Return Home link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={ReturnHome} alt="Return" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/home">Return Home</Link>
                    </li>
                </ul>
            </div>

            <div style={{ marginLeft: '220px' }}>
                {/* Right side content */}
                <h1>Add Courses</h1>

                <div>
                    <a>Add Course by entering Course Info</a>
                    <div>
                        {/* Input Form */}
                        <form onSubmit={handleSubmit}>
                            {/* Course ID input */}
                            <label>Enter your Course ID (e.g. CSCI3100):
                                <input 
                                    type="text" 
                                    name="cid" 
                                    value={inputs.cid || ""} 
                                    onChange={handleChange}
                                />
                            </label>
                            {/* Course Starting Term input */}
                            <div>
                                <label>Enter the Course Starting Term (e.g. 2020 T1):
                                    <input 
                                        type="text" 
                                        name="Term" 
                                        value={inputs.Term || ""} 
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Course Name input */}
                                        <div>
                                        <label>Enter your Course Name (e.g. Software Engineering):
                                        <input
                                        type="text"
                                        name="name"
                                        value={inputs.name || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Department input */}
                                        <div>
                                        <label>Enter the Department that organizes the course (e.g. ENGG):
                                        <input
                                        type="text"
                                        name="department"
                                        value={inputs.department || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Course Date input */}
                                        <div>
                                        <label>Enter your Course Date (Weekdays: MONDAY):
                                        <input
                                        type="text"
                                        name="date"
                                        value={inputs.date || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Course Start Time input */}
                                        <div>
                                        <label>Enter your Course Start Time (HH:MM):
                                        <input
                                        type="text"
                                        name="startTime"
                                        value={inputs.startTime || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Course End Time input */}
                                        <div>
                                        <label>Enter your Course End Time (HH:MM):
                                        <input
                                        type="text"
                                        name="endTime"
                                        value={inputs.endTime || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Course Instructor input */}
                                        <div>
                                        <label>Enter the Course Instructor Name (e.g. Dr. Wilson Wong Wai Ho):
                                        <input
                                        type="text"
                                        name="instructor"
                                        value={inputs.instructor || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Course Capacity input */}
                                        <div>
                                        <label>Enter the Course Capacity (e.g. 100):
                                        <input
                                        type="text"
                                        name="capacity"
                                        value={inputs.capacity || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Current Capacity input */}
                                        <div>
                                        <label>Enter the Number of Students Enrolled in the Course (e.g. 0):
                                        <input
                                        type="text"
                                        name="current_capacity"
                                        value={inputs.current_capacity || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Course Description input */}
                                        <div>
                                        <label>Enter the Course Description (e.g. This course ....):
                                        <input
                                        type="text"
                                        name="description"
                                        value={inputs.description || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        {/* Course Venue input */}
                                        <div>
                                        <label>Enter the Course Venue (e.g. LSK LT5):
                                        <input
                                        type="text"
                                        name="place"
                                        value={inputs.place || ""}
                                        onChange={handleChange}
                                        />
                                        </label>
                                        </div>
                                        <input type="submit" />
                                        {response && <p className="response">{response}</p>}
                                        {err && <p className="err">{err}</p>}
                                        </form>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        );
                                        };
                                        
export default AddCourse;
