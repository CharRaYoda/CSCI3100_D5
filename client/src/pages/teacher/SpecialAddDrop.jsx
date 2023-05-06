//Special add/drop page

import React from 'react';
import { Link } from 'react-router-dom';
import Search from './image/Search.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import { useState } from 'react';

const SpecialAddDrop = () => {
    //actions, user input, server response
    const actions = ["select", "Add", "Drop"];
    const [uid, setUid] = useState('');
    const [cid, setCid] = useState('');
    const [action, setAction] = useState(actions[0]);
    const [response, setResponse] = useState(null);
    const [err, setError] = useState(null);

    //submit handle function
    const handleSubmit = async () => {
        try {
          const response = await axios.post("/enrollments/SpecialAddDrop", {uid: uid, cid: cid, action: action});
          setResponse(response.data);
          setError(null);
        } catch (err) {
          setError(err.response.data);
          setResponse(null);
        }
    }

    return (
        <div className='SpecialAddDrop'>
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
              <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                      <div>
                      <img src={Search} alt="Search" style={{ marginRight: '10px' }} />
                      </div>
                      <Link>SpecialAddDrop</Link>
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
                <h1>Special Add/Drop</h1>
                <p>Input student ID: </p>
                <input placeholder="Student ID (e.g. 1234)" type="text" onChange={(event) => setUid(event.target.value)}/>
                <p style={{ marginTop: '20px' }}>Input course code: </p>
                <input placeholder="Course ID (e.g. CSCI3100)" type="text" onChange={(event) => setCid(event.target.value)}/>
                <p style={{ marginTop: '20px' }}>Select Action: </p>
                <select
                    onChange={(event) => setAction(event.target.value)}>
                    {actions.map((action) => (
                        <option value={action} key={action}>
                        {action}
                        </option>
                    ))}
                </select>
                <br/>
                <br/>
                <button onClick={handleSubmit} style={{marginBottom: '20px'}}>Upload</button>
                {response && <p className="response">{response}</p>}
                {err && <p className="err">{err}</p>}
            </div>
        </div>
    );
};

export default SpecialAddDrop;