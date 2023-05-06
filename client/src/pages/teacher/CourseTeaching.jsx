//Course teaching page

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from './image/Search.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import { useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

const CourseTeaching = () => {
    //current user, server response
    const { currentUser } = useContext(AuthContext);
    const [results, setResults] = useState([]);

    //fetch teaching courses when rendering in the beginning
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/courses/teach/${currentUser.name}`);
            setResults(response.data);
        }
        fetchData();
    },[]);

    return (
        <div className='CourseTeaching'>
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
                <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                        <img src={ProfileIcon} alt="CourseTeaching" style={{ marginRight: '10px' }} />
                        </div>
                        <Link>Course Teaching</Link>
                    </li>

                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                        <img src={ReturnHome} alt="Return" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/teacher/home">Return</Link>
                    </li>
                </ul>
            </div>

            <div style={{ marginLeft: '220px' }}>
                {/* Right side */}
                <h1>Course Teaching</h1>
                <h1>{currentUser.name}</h1>

                <h2>Your teaching courses: </h2>
                <table>
                  <thead>
                  <tr>
                      <th style={{padding: '8px'}}>Term</th>
                      <th style={{padding: '8px'}}>Course Code</th>
                      <th style={{padding: '8px'}}>Name</th>
                      <th style={{padding: '8px'}}>Weekday</th>
                      <th style={{padding: '8px'}}>Time</th>
                      <th style={{padding: '8px'}}>Place</th>
                      <th style={{padding: '8px'}}>Department</th>
                      <th style={{padding: '8px'}}>Instructor</th>
                      <th style={{padding: '8px'}}>Capacity</th>
                      <th style={{padding: '8px'}}>Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  {results.map((result) => (
                      <tr key={result.cid}>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.Term}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.cid}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.name}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.date}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.startTime}-{result.endTime}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.place}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.department}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.instructor}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.current_capacity}/{result.capacity}</td>
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.description}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseTeaching;