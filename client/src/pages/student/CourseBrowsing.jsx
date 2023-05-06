//Course browsing page

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './image/Search.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import { useState } from 'react';
import { AuthContext } from '../../context/authContext';

const CourseBrowsing = () => {
    //current user info, server response
    const { currentUser } = useContext(AuthContext);
    const [results, setResults] = useState([]);
    const [response, setResponse] = useState(null);
    const [err, setError] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    //search course by id
    const [idQuery, setIdQuery] = useState('');
    const handleSearchById = async () => {
        try {
          const response = await axios.get(`/courses/id/${idQuery}`);
          setResults(response.data);
          setResponse(null);
          setError(null);
        } catch (err) {
          console.error(err);
        }
    }

    //search course by name
    const [nameQuery, setNameQuery] = useState('');
    const handleSearchByName = async () => {
        try {
          const response = await axios.get(`/courses/name/${nameQuery}`);
          setResults(response.data);
          setResponse(null);
          setError(null);
        } catch (err) {
          console.error(err);
        }
    }

    //search course by department
    const departments = ["CSE", "Math"];
    const [departmentQuery, setDepartmentQuery] = useState(departments[0]);
    const handleSearchByDepartment = async () => {
        try {
          const response = await axios.get(`/courses/department/${departmentQuery}`);
          setResults(response.data);
          setResponse(null);
          setError(null);
        } catch (err) {
          console.error(err);
        }
    }

    //search course by time
    const [startRange, setStartRange] = useState('');
    const [endRange, setEndRange] = useState('');
    const handleSearchByTime = async () => {
        try {
          const response = await axios.post("/courses/time", {startRange: startRange, endRange: endRange});
          setResults(response.data);
          setResponse(null);
          setError(null);
        } catch (err) {
          console.error(err);
        }
    }

    //select course
    const handleSelect = async (cid, index) => {
        try {
          const response = await axios.post("/enrollments/SelectCourse", {uid: currentUser.uid, cid: cid});
          setSelectedIndex(index);
          setResponse(response.data);
          setError(null);
          
          //update current capacity on the page
          const response2 = await axios.get(`/courses/id/${cid}`);
          const newResults = [...results];
          newResults[index].current_capacity = response2.data[0].current_capacity;
          setResults(newResults);
        } catch (err) {
          setSelectedIndex(index);
          setError(err.response.data);
          setResponse(null);
        }
    }

    return (
        <div className='CourseBrowsing'>
          <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
              <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                      <div>
                      <img src={Search} alt="Search" style={{ marginRight: '10px' }} />
                      </div>
                      <Link>Course Search</Link>
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
              <h1>Course Browsing</h1>

              <p style={{marginTop: '15px'}}>Search by course code: (e.g. CSCI3100)</p>
              <input placeholder="Input Course Code" type="text" onChange={(event) => setIdQuery(event.target.value)}/>
              <button onClick={handleSearchById} style={{marginLeft: '8px'}}>Search</button>

              <p style={{marginTop: '15px'}}>Search by course name: (e.g. Software Engineering)</p>
              <input placeholder="Input Course Name" type="text" onChange={(event) => setNameQuery(event.target.value)}/>
              <button onClick={handleSearchByName} style={{marginLeft: '8px'}}>Search</button>

              <p style={{marginTop: '15px'}}>Search by department: </p>
              <select
                onChange={(event) => setDepartmentQuery(event.target.value)}>
                  {departments.map((department) => (
                    <option value={department} key={department}>
                      {department}
                    </option>
                  ))}
              </select>
              <button onClick={handleSearchByDepartment} style={{marginLeft: '8px'}}>Search</button>

              <p style={{marginTop: '15px'}}>Search by start time: </p>
              <div className="input-container">
                <p style={{marginRight: '8px'}}>From</p>
                <input placeholder="HH:MM" type="text" onChange={(event) => setStartRange(event.target.value)}/>
                <p style={{marginRight: '8px', marginLeft: '8px'}}>to</p>
                <input placeholder="HH:MM" type="text" onChange={(event) => setEndRange(event.target.value)}/>
                <button onClick={handleSearchByTime} style={{marginLeft: '8px'}}>Search</button>
              </div>
              
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
                      <td><button onClick={() => handleSelect(result.cid, index)}>Select</button></td>
                      {/* show response or err if button is clicked*/}
                      {selectedIndex === index && (
                        <>
                          <td>{response && <p className="response">{response}</p>}</td>
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

export default CourseBrowsing;