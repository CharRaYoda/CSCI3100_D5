import axios from 'axios';
import React, { useState } from 'react';
import Search from './image/Search.png'
import AddUser from './image/AddUser.png'
import ReturnHome from './image/ReturnHome.png'
import { Link } from 'react-router-dom';

const DeleteUser = () => {
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        let answer = window.confirm("Confirm for deleting the User :"+ inputs.uid)
        if (answer){
            const resp = await axios.post('/users/del',inputs);
        }
    }

    return (
        <div className='DeleteUser'>
        <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
            <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={Search} alt="Search Users" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/admin/ViewEditUsers">Search Users</Link>
                </li>

                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={AddUser} alt="Add Users" style={{ marginRight: '10px' }} />}
                    </div>
                    <Link to="/admin/ViewEditUsers/AddUsers">Add Users</Link>
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
            <h1>Delete Users</h1>

            <div>
            <a>Delete User By entering the user ID</a>
            <div>
            <form onSubmit={handleSubmit}>
                    <label>Enter the User ID:
                    <input 
                        type="text" 
                        name="uid" 
                        value={inputs.uid || ""} 
                        onChange={handleChange}
                    />
                    </label>
                <input type="submit" />
            </form>
            
            
            </div>
            </div>

        </div>
        </div>
   );
};

export default DeleteUser;