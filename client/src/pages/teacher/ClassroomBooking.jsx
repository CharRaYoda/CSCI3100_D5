//Classroom booking page

import axios from 'axios';
import React, {useState } from 'react';
import add from './image/add.png'
import ReturnHome from './image/ReturnHome.png'
import { Link } from 'react-router-dom';
import Search from './image/Search.png'

const AddCourse = () => {
    const [inputs, setInputs] = useState({});
    
    //input change handle function
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    //submit handle function
    const handleSubmit = async(event) => {
        event.preventDefault();
        let answer = window.confirm("Confirm to request classwork change for the course: "+ inputs.cid + " ?")
        if (answer){
            const resp = await axios.post('/courses/ClassroomBook',inputs);
        }
    }

    return (
        <div className='AddCourse'>
        <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
            <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={Search} alt="Search" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/teacher/ClassroomBooking/show">Search Courses</Link>
                </li>
            {/* Return to Classroom booking */}
            <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={add} alt="Booking Classroom" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/teacher/ClassroomBooking">Classroom Booking</Link>
                </li>
            {/* Return to teacher home*/}
                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    <img src={ReturnHome} alt="Return" style={{ marginRight: '10px' }} />
                    </div>
                    <Link to="/teacher/home">Return Home</Link>
                </li>
            </ul>
        </div>

        <div style={{ marginLeft: '220px' }}>
            {/* Right side */}
            <h1>Classroom Booking</h1>
            {/*<h1>{currentUser.uid}</h1>*/}

            <div>
            <a>Booking Class by input the imformation below</a>
            <div>
            <form onSubmit={handleSubmit}>
                    {/*Inputting the Course ID , name is setting to cid*/}
                    <label>Enter your Course ID (e.g. CSCI3100):        
                    <input 
                        type="text" 
                        name="cid" 
                        value={inputs.cid || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <div>
                    <label>Enter your Course Teaching Date (e.g. Monday, Tuesday, etc):        
                    <input 
                        type="text" 
                        name="date" 
                        value={inputs.date || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    {/*Inputting the Venue , name is setting to Term */}
                    <label>Enter the Venue (e.g. LSK RM513, LSK L5):     
                    <input 
                        type="text" 
                        name="place" 
                        value={inputs.place || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    {/*Inputting the Starting Time , name is setting to name */}
                    <div>
                    <label>Enter the Starting Time(HHMM):     
                    <input 
                        type="text" 
                        name="StartTime" 
                        value={inputs.StartTime || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    {/*Inputting the Ending Time , name is setting to department */}
                    <div>
                    <label>Enter the Ending Time(HHMM):       
                    <input 
                        type="text" 
                        name="endTime" 
                        value={inputs.endTime || ""} 
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