import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Search from './image/Search.png'
import AddUser from './image/AddUser.png'
import Del from './image/Delete.png'
import ReturnHome from './image/ReturnHome.png'
import { Link } from 'react-router-dom';

const DeleteCourse = () => {
    const [inputs, setInputs] = useState({});
    // TODO
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        let answer = window.confirm("Confirm for deleting the Course :"+ inputs.cid)
        if (answer){
            const resp = await axios.post('/courses/del',inputs);
        }
    }

    return (
        <div className='DeleteCourse'>
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
                    {<img src={AddUser} alt="Add Courses" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/admin/ViewEditCourses/AddCourses">Add Courses</Link>
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
            <h1>Delete Courses</h1>
            {/*<h1>{currentUser.uid}</h1>*/}

            <div>
            <a>Delete Course By entering the Course ID</a>
            <div>
            <form onSubmit={handleSubmit}>
                    <label>Enter the Course ID:
                    <input 
                        type="text" 
                        name="cid" 
                        value={inputs.cid || ""} 
                        onChange={handleChange}
                    />
                    </label>
                <input type="submit" />
            </form>
            
            
            </div>
            </div>

        </div>
        </div>
   );
};

export default DeleteCourse;