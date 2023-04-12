import axios from 'axios';
import React, { useEffect, useState } from 'react';
import add from './image/add.png'
import ReturnHome from './image/ReturnHome.png'
import { Link } from 'react-router-dom';
{/* The code (espially the backend part) is basely according to the admin/Addcourse.jsx,
    if you can't understand, please refer to that file or ask Ken */}
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
            <form onSubmit={handleSubmit}>\
                    {/*Inputting the Course ID , name is setting to cid*/}
                    <label>Enter your Course ID:
                    <input 
                        type="text" 
                        name="cid" 
                        value={inputs.cid || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <div>
                    {/*Inputting the Venue , name is setting to Term */}
                    <label>Enter the Venue
                    <input 
                        type="text" 
                        name="Term" 
                        value={inputs.Term || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    {/*Inputting the Starting Time , name is setting to name */}
                    <div>
                    <label>Enter the Starting Time:
                    <input 
                        type="text" 
                        name="name" 
                        value={inputs.name || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    {/*Inputting the Ending Time , name is setting to department */}
                    <div>
                    <label>Enter the Ending Time:
                    <input 
                        type="text" 
                        name="department" 
                        value={inputs.department || ""} 
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