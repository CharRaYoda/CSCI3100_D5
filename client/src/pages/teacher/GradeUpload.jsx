//Grade upload page

import React from 'react';
import { Link } from 'react-router-dom';
import Search from './image/Search.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import { useState } from 'react';

const GradeUpload = () => {
    //grades, user input, server response
    const grades = ["select", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F"];
    const [uid, setUid] = useState('');
    const [cid, setCid] = useState('');
    const [grade, setGrade] = useState(grades[0]);
    const [response, setResponse] = useState(null);
    const [err, setError] = useState(null);

    //submit handle function
    const handleGradeUpload = async () => {
        try {
          const response = await axios.put("/enrollments/GradeUpload", {uid: uid, cid: cid, grade: grade});
          setResponse(response.data);
          setError(null);
        } catch (err) {
          setError(err.response.data);
          setResponse(null);
        }
    }

    return (
        <div className='GradeUpload'>
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
              <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                      <div>
                      <img src={Search} alt="Search" style={{ marginRight: '10px' }} />
                      </div>
                      <Link>Upload Grade</Link>
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
                <h1>Upload Grade</h1>
                <p>Input student ID: </p>
                <input placeholder="Student ID" type="text" onChange={(event) => setUid(event.target.value)}/>
                <p style={{ marginTop: '20px' }}>Input course code: </p>
                <input placeholder="Course ID" type="text" onChange={(event) => setCid(event.target.value)}/>
                <p style={{ marginTop: '20px' }}>Select Grade: </p>
                <select
                    onChange={(event) => setGrade(event.target.value)}>
                    {grades.map((grade) => (
                        <option value={grade} key={grade}>
                        {grade}
                        </option>
                    ))}
                </select>
                <button onClick={handleGradeUpload} style={{marginLeft: '8px', marginBottom: '20px'}}>Upload</button>
                {response && <p className="response">{response}</p>}
                {err && <p className="err">{err}</p>}
            </div>
        </div>
    );
};

export default GradeUpload;