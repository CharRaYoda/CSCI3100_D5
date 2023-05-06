//Course update page

import React from 'react';
import { Link } from 'react-router-dom';
import Add from './image/add.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import { useState } from 'react';

const CourseUpdate = () => {
    //user input, server response
    const [cid, setCid] = useState('');
    const [description, setDescription] = useState('');
    const [response, setResponse] = useState(null);
    const [err, setError] = useState(null);

    //submit handle function
    const handleCourseUpdate = async () => {
        try {
          const response = await axios.put("/courses/CourseUpdate", {cid: cid, description: description});
          setResponse(response.data);
          setError(null);
        } catch (err) {
          setError(err.response.data);
          setResponse(null);
        }
    }

    return (
        <div className='CourseUpdate'>
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
              <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                      <div>
                      <img src={Add} alt="add" style={{ marginRight: '10px' }} />
                      </div>
                      <Link>Course Update</Link>
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
                <h1>Course Update</h1>
                <p>Input Course ID: </p>
                <input placeholder="Course ID (e.g. CSCI3100)" type="text" onChange={(event) => setCid(event.target.value)}/>
                <p style={{ marginTop: '20px' }}>Input Course Desciption: </p>
                <div>
                    <textarea 
                        placeholder="Enter course description here" 
                        style={{ width: "400px", height: "100px" }}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <button onClick={handleCourseUpdate} style={{marginLeft: '8px', marginBottom: '20px'}}>Upload</button>
                {response && <p className="response">{response}</p>}
                {err && <p className="err">{err}</p>}
            </div>
        </div>
    );
};

export default CourseUpdate;