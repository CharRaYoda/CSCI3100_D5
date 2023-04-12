import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Search from './image/Search.png'
import Del from './image/Delete.png'
import ReturnHome from './image/ReturnHome.png'
import { Link } from 'react-router-dom';

const AddCourse = () => {
    const [inputs, setInputs] = useState({});
    // TODO
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        let answer = window.confirm("Confirm to add the course : "+ inputs.name + " ?")
        if (answer){
            const resp = await axios.post('/courses',inputs);
        }
    }

    return (
        <div className='AddCourse'>
        <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
            <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={Search} alt="Search Courses" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/admin/ViewEditCourses">Search Courses</Link>
                </li>

                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={Del} alt="Delete Courses" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/admin/ViewEditCourses/DeleteCourses">DeleteCourses</Link>
                </li>

                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    <img src={ReturnHome} alt="Return" style={{ marginRight: '10px' }} />
                    </div>
                    <Link to="/admin/home">Return Home</Link>
                </li>
            </ul>
        </div>

        <div style={{ marginLeft: '220px' }}>
            {/* Right side */}
            <h1>Add Courses</h1>
            {/*<h1>{currentUser.uid}</h1>*/}

            <div>
            <a>Add Course by entering Course Info</a>
            <div>
            <form onSubmit={handleSubmit}>
                    <label>Enter your Course ID:
                    <input 
                        type="text" 
                        name="cid" 
                        value={inputs.cid || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <div>
                    <label>Enter the Course Starting Term:
                    <input 
                        type="text" 
                        name="Term" 
                        value={inputs.Term || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter your Course Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={inputs.name || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter the Department that organize the course:
                    <input 
                        type="text" 
                        name="department" 
                        value={inputs.department || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter your Course Course Date (Weekdays):
                    <input 
                        type="text" 
                        name="date" 
                        value={inputs.date || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter your Course Start Time(HHMM):
                    <input 
                        type="text" 
                        name="startTime" 
                        value={inputs.startTime || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter your Course End Time (HHMM):
                    <input 
                        type="text" 
                        name="endTime" 
                        value={inputs.endTime || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter the Course Instructor Name:
                    <input 
                        type="text" 
                        name="instructor" 
                        value={inputs.instructor || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter the Course Capacity:
                    <input 
                        type="text" 
                        name="capacity" 
                        value={inputs.capacity || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter the Course current available capacity:
                    <input 
                        type="text" 
                        name="current_capacity" 
                        value={inputs.current_capacity || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter the Course description:
                    <input 
                        type="text" 
                        name="description" 
                        value={inputs.description || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter the Course venue:
                    <input 
                        type="text" 
                        name="place" 
                        value={inputs.place || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                <input type="submit" />
            </form>
            
            
            </div>
            </div>

        </div>
        </div>
   );
};

export default AddCourse;