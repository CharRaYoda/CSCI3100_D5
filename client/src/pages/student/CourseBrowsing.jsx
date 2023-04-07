import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './image/Search.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import { useState } from 'react';
import { AuthContext } from '../../context/authContext';

const CourseBrowsing = () => {
    const { currentUser } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);

    //search course
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const handleSearch = async () => {
        try {
        const response = await axios.get(`/courses/${query}`);
        setResults(response.data);
        } catch (error) {
        console.error(error);
        }
    }

    //select course
    const handleSelect = async (input) => {
        try {
          await axios.post("/courses/selectCourse", {uid: currentUser.uid, cid: input});
        } catch (err) {
          console.log(err);
        }
    };

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

                <li style={{ padding: '10px', display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 20, marginLeft: '50px' }}>
                    <button>Log Out</button>
                </li>
            </ul>
        </div>

        <div style={{ marginLeft: '220px' }}>
            {/* Right side */}
            <h1>Course Browsing</h1>
            <h1>{currentUser.uid}</h1>

            <div>
            <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
            <button onClick={handleSearch}>Search</button>

            <table>
                <thead>
                <tr>
                    <th style={{padding: '8px'}}>ID</th>
                    <th style={{padding: '8px'}}>Name</th>
                    <th style={{padding: '8px'}}>Time</th>
                    <th style={{padding: '8px'}}>Place</th>
                    <th style={{padding: '8px'}}>Department</th>
                    <th style={{padding: '8px'}}>Instructor</th>
                    <th style={{padding: '8px'}}>Capacity</th>
                </tr>
                </thead>
                <tbody>
                {results.map((result) => (
                    <tr key={result.cid}>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.cid}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.name}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.time}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.place}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.department}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.instructor}</td>
                    <td style={{textAlign: 'center', verticalAlign: 'middle'}}>{result.capacity}</td>
                    <button onClick={() => handleSelect(result.cid)}>Select</button>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

        </div>
        </div>
  );
};

export default CourseBrowsing;