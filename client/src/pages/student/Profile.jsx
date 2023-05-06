//Student profile page

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from './image/Search.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import { useState, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

const Profile = () => {
    //current user info, server response
    const { currentUser } = useContext(AuthContext);
    const [results, setResults] = useState([]);
    const [cgpa, setCgpa] = useState();
    const [err, setError] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F"];

    //fetch selected courses when rendering in the beginning
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/enrollments/cgpa/${currentUser.uid}`);
            setCgpa(response.data);
            const response2 = await axios.get(`/enrollments/${currentUser.uid}`);
            setResults(response2.data);
        }
        fetchData();
    },[]);

    //drop course handle function
    const handleDrop = async (cid, index) => {
        try {
          setSelectedIndex(index);
          await axios.post("/enrollments/drop", {uid: currentUser.uid, cid: cid});
          const response = await axios.get(`/enrollments/${currentUser.uid}`);
          setResults(response.data);
        } catch (err) {
          setError(err.response.data);
        }
    }

    return (
        <div className='Profile'>
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
                <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                        <img src={ProfileIcon} alt="ProfileIcon" style={{ marginRight: '10px' }} />
                        </div>
                        <Link>Profile</Link>
                    </li>

                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                        <img src={ReturnHome} alt="Return" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/student/home">Return</Link>
                    </li>
                </ul>
            </div>

            <div style={{ marginLeft: '220px' }}>
                {/* Right side */}
                <h1>Profile</h1>
                <h1>{currentUser.name}</h1>
                <h1>CGPA: {cgpa}</h1>

                <h2>Your selected courses: </h2>
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
                      <th style={{padding: '8px'}}>Grade</th>
                  </tr>
                  </thead>
                  <tbody>
                  {results.map((result, index) => (
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
                      <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.grade}</td>
                      {/* Display drop button if there is no grade */}
                      {!grades.includes(result.grade) && (
                        <td><button onClick={() => handleDrop(result.cid, index)}>Drop</button></td>
                      )}
                      {/* Display message when corresponding button is clicked */}
                      {selectedIndex === index && (
                        <>
                          <td>{err && <p className="err">{err}</p>}</td>
                        </>
                      )}
                      </tr>
                  ))}
                  </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;