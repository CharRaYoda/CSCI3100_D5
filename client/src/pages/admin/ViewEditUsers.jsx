// View/Edit User Page

//imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddUser from './image/AddUser.png'
import Del from './image/Delete.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import UserTable from "./UserTable";

const ViewEditUsers = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const fetchUsers = async () => {
        const resp = await axios.get('/users');
        setData(resp.data);
        setVisibleData(resp.data);
        console.log(resp.data, "resp.data");
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Searech/filter function
    useEffect(() => {
        const filterData = async () => {
            setVisibleData(data.filter((item) => JSON.stringify(item.uid).includes(query) || (item.name.toLowerCase()).includes(query.toLowerCase())));
        };
        if (query.length > 0) {
            filterData();
        } else {
            fetchUsers();
        }
    }, [query]);

    return (
        <div className='ViewEditUsers'>
            {/* Left side navigation menu */}
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
                <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {/* Add Users link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={AddUser} alt="Search" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/ViewEditUsers/AddUsers">Add Users</Link>
                    </li>

                    {/* Delete User link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={Del} alt="Delete User" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/ViewEditUsers/DeleteUsers">Delete User</Link>
                    </li>

                    {/* Return Home link */}
                    <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={ReturnHome} alt="Return Home" style={{ marginRight: '10px' }} />
                        </div>
                        <Link to="/admin/home">Return Home</Link>
                    </li>
                </ul>
            </div>

            <div style={{ marginLeft: '220px' }}>
                {/* Right side content */}
                <h1>View/Edit User</h1>

                <div>
                    {/* Search input */}
                    <input
                        type='uid'
                        className='ViewClassSearch'
                        placeholder='Search/Filter User by User ID or User Name'
                        onChange={e => setQuery(e.target.value)}
                        style={{ width: '300px' }}
                    />

                    {/* UserTable component */}
                    {<UserTable data={visibleData} />}
                </div>
            </div>
        </div>
    );
};

export default ViewEditUsers;