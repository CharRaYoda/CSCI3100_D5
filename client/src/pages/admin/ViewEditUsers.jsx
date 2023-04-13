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
    const [visbleData, setVisbleData] = useState([]);
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };


    const fetchCourses = async() => {
        const resp = await axios.get('/users');
        setData(resp.data);
        setVisbleData(resp.data);
        console.log(resp.data,"resp.data")
    };
    
    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        const filterData = async() => {
            setVisbleData(data.filter((item)=>JSON.stringify(item.uid).includes(query)||(item.name.toLowerCase()).includes(query.toLocaleLowerCase())))};
             if (query.length > 0){
            filterData();
        }else {
            fetchCourses()
        }
    }, [query]);

    return (
        <div className='ViewEditUsers'>
        <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
            <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={AddUser} alt="Search" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/admin/ViewEditUsers/AddUsers">Add Users</Link>
                </li>

                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={Del} alt="Delete User" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/admin/ViewEditUsers/DeleteUsers">Delete User</Link>
                </li>

                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    <img src={ReturnHome} alt="Return Home" style={{ marginRight: '10px' }} />
                    </div>
                    <Link to="/admin/home">Return Home</Link>
                </li>

            </ul>
        </div>

        <div style={{ marginLeft: '220px' }}>
            {/* Right side */}
            <h1>View/Edit User</h1>

            <div>
            <input type='uid' 
            className='ViewClassSearch' 
            placeholder='Search/Filter User by User ID' 
            onChange={e=> setQuery(e.target.value)}
            style={{ width: '200px' }} />
            
            {<UserTable data={visbleData} />}
            </div>
            </div>

        </div>
   );
};

export default ViewEditUsers;