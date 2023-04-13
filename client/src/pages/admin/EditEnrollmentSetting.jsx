import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PeriodTable from "./PeriodTable";

import Edit from './image/EditEnrollmentPeriod.png'
import View from './image/Search.png';
import ReturnHome from './image/ReturnHome.png';


const EditEnrollmentSetting = () => {
    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let answer = window.confirm("Confirm to add the enrollment period from " + inputs.start_date + ' at time ' + inputs.start_time + " to " + inputs.end_date + ' at time ' + inputs.end_time + " ?")
        if (answer) {
            const resp = await axios.post('/periods', inputs);
        }
    }

    return (
        <div className='EditEnrollmentSetting'>

            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
                <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>

                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            {<img src={View} alt="View Enrollment Period" style={{ marginRight: '10px' }} />}
                            <Link to="/admin/EnrollmentSetting">View Enrollment Period</Link>
                        </div>

                    </li>

                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={Edit} alt="Edit Enrollment Period" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/EnrollmentSetting/EditEnrollmentSetting">Edit Enrollment Period</Link>
                    </li>

                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={ReturnHome} alt="Return Home" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/home">Return Home</Link>
                    </li>

                </ul>
            </div>


            /* Right side */
            <div style={{ marginLeft: '220px' }}>
                
                <h1>Edit Enrollment Setting</h1>

                <div>
                    <a>Edit enrollment period by entering period Info</a>
                    <div>
                        <form onSubmit={handleSubmit}>

                            <label>Enter the starting date (YYYY-MM-DD):
                                <input
                                    type="text"
                                    name="start_date"
                                    value={inputs.start_date || ""}
                                    onChange={handleChange}
                                />
                            </label>
                            <div>
                                <label>Enter the starting time (HH:MM:SS):
                                    <input
                                        type="text"
                                        name="start_time"
                                        value={inputs.start_time || ""}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>Enter the ending date (YYYY-MM-DD):
                                    <input
                                        type="text"
                                        name="end_date"
                                        value={inputs.end_date || ""}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>Enter the ending time (HH:MM:SS):
                                    <input
                                        type="text"
                                        name="end_time"
                                        value={inputs.end_time || ""}
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

export default EditEnrollmentSetting;