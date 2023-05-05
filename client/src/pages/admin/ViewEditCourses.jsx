//View/Edit Course Page

//imports
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AddUser from './image/AddUser.png';
import Del from './image/Delete.png';
import ReturnHome from './image/ReturnHome.png';
import Table from "./Table";

const ViewEditCourses = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);

    const fetchCourses = async () => {
        const resp = await axios.get('/courses');
        setData(resp.data);
        setVisibleData(resp.data);
        console.log(resp.data, "resp.data");
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    // Searech/filter function
    useEffect(() => {
        const filterData = async () => {
            setVisibleData(data.filter((item) => JSON.stringify(item.cid).includes(query.toLowerCase()) || (item.name.toLowerCase()).includes(query)));
        };
        if (query.length > 0) {
            filterData();
        } else {
            fetchCourses();
        }
    }, [query]);

    return (
        <div className='ViewEditCourses'>
            {/* Left side navigation menu */}
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
                <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {/* Add Courses link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={AddUser} alt="Add Courses" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/ViewEditCourses/AddCourses">Add Courses</Link>
                    </li>

                    {/* Delete Courses link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={Del} alt="Delete Courses" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/ViewEditCourses/DeleteCourses">Delete Courses</Link>
                    </li>

                    {/* Return Home link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={ReturnHome} alt="Return" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/home">Return Home</Link>
                    </li>
                </ul>
            </div>

            <div style={{ marginLeft: '220px' }}>
                {/* Right side content */}
                <h1>View/Edit Courses</h1>

                {/* Search input */}
                <input
                    type='cid'
                    className='ViewClassSearch'
                    placeholder='Search Course by Course ID or Course Name'
                    onChange={e => setQuery(e.target.value)}
                    style={{ width: '300px' }}
                />

                {/* Table component */}
                {<Table data={visibleData} />}
            </div>
        </div>
    );
};

export default ViewEditCourses;
