import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PeriodTable from "./PeriodTable";

import Edit from './image/EditEnrollmentPeriod.png'
import View from './image/Search.png';
import ReturnHome from './image/ReturnHome.png';


const EnrollmentSetting = () => {

    const [query, ] = useState("");
    const [, setData] = useState([]);
    const [visbleData, setVisbleData] = useState([]);

    const fetchPeriod = async () => {
        const resp = await axios.get('/periods');
        setData(resp.data);
        setVisbleData(resp.data);
        console.log(resp.data, "resp.data");
    };

    useEffect(() => {

        fetchPeriod()
        
    }, [query]);


    return (
        <div className='EnrollmentSetting'>

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


            <div style={{ marginLeft: '220px' }}>
                <h1>Enrollment Setting</h1>
                <div>
                    {<PeriodTable data={visbleData} />}
                </div>
            </div>

        </div>

   );
};

export default EnrollmentSetting;