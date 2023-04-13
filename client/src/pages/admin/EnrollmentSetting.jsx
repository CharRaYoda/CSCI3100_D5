import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReturnHome from './image/ReturnHome.png'
import { Link } from 'react-router-dom';
import Search from './image/Search.png'

const EnrollmentSetting = () => {
    const periods = ["Select", "Open", "Close"];
    const [period, setPeriod] = useState(periods[0]);
    const [response, setResponse] = useState(null);
    const [err, setError] = useState(null);

    const handleSubmit = async () => {
        try {
          const response = await axios.put("/enrollments/period", {period: period});
          setResponse(response.data);
          setError(null);
        } catch (err) {
          setResponse(null);
          setError(err.response.data);
        }
    }

    return (
        <div className='EnrollmentSetting'>
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
              <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                      <div>
                      <img src={Search} alt="Search" style={{ marginRight: '10px' }} />
                      </div>
                      <Link>Enrollment Setting</Link>
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
              <h1>Enrollment Setting</h1>

              <p style={{marginTop: '15px'}}>Open/Close enrollment period: </p>
              <select
                onChange={(event) => setPeriod(event.target.value)}>
                  {periods.map((period) => (
                    <option value={period} key={period}>
                      {period}
                    </option>
                  ))}
              </select>
              <button onClick={handleSubmit} style={{marginLeft: '8px'}}>Confirm</button>
              {response && <p className="response">{response}</p>}
              {err && <p className="err">{err}</p>}
          </div>
        </div>
   );
};

export default EnrollmentSetting;