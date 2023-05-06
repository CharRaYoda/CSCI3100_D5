//Classroom show page

import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Search from './image/Search.png'
import ReturnHome from './image/ReturnHome.png'
import Table from "./Table";
import add from './image/add.png'

const ViewEditCourses = () => {
    //data and query
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [visbleData, setVisbleData] = useState([]);

    //fetch courses from database
    const fetchCourses = async() => {
        const resp = await axios.get('/courses');
        setData(resp.data);
        setVisbleData(resp.data);
        console.log(resp.data,"resp.data")
    };
    
    useEffect(() => {
        fetchCourses();
    }, []);

    //filter function for course list
    useEffect(() => {
        const filterData = async() => {
            setVisbleData(data.filter((item)=>JSON.stringify(item.place.toLowerCase()).includes(query.toLowerCase())))
        }; if (query.length > 0){
            filterData();
        }else {
            fetchCourses()
        }
    }, [query]);

    return (
        <div className='ViewEditCourses'>
        <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
            <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={Search} alt="Search" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/teacher/ClassroomBooking/show">Search Courses</Link>
                </li>

                {/* Return to Classroom booking */}
            <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={add} alt="Booking Classroom" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/teacher/ClassroomBooking">Classroom Booking</Link>
                </li>

                {/* Return to teacher home*/}
                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    <img src={ReturnHome} alt="Return" style={{ marginRight: '10px' }} />
                    </div>
                    <Link to="/teacher/home">Return Home</Link>
                </li>
            </ul>
        </div>

        <div style={{ marginLeft: '220px' }}>
            {/* Right side */}
            <h1>Search Courses</h1>
            
            <input type='cid' 
            className='ViewClassSearch' 
            placeholder='Search Course by Venue' 
            onChange={e=> setQuery(e.target.value)}
            style={{ width: '300px' }} />
            
            {<Table data={visbleData} />}
            </div>

        </div>
   );
};

export default ViewEditCourses;