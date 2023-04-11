import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReturnHome from './image/ReturnHome.png'
import Del from './image/Delete.png'
import { Link } from 'react-router-dom';
import Search from './image/Search.png'

const AddCourse = () => {
    const [inputs, setInputs] = useState({});
    const roles = ["select", "student", "teacher", "admin"];
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        let answer = window.confirm("Confirm to add the user : "+ inputs.uid + " ?")
        if (answer){
            const resp = await axios.post('/users/add',inputs);
        }
    }

    return (
        <div className='CourseBrowsing'>
        <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
            <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    {<img src={Search} alt="Search" style={{ marginRight: '10px' }} />}
                    <Link to="/admin/ViewEditUsers">Search User</Link>
                    </div>
                    
                </li>

                <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <div>
                    <img src={Del} alt="Delete User" style={{ marginRight: '10px' }} />
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
            <h1>Add Users</h1>
            {/*<h1>{currentUser.uid}</h1>*/}

            <div>
            <a>Add User by entering Course Info</a>
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
                    <div>
                    <label>Enter the Temporary User Password:
                    <input 
                        type="text" 
                        name="password" 
                        value={inputs.password || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter User email:
                    <input 
                        type="text" 
                        name="email" 
                        value={inputs.email || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                        <div>Select Role Below</div>
                    <select value={inputs.role} name="role" onChange={handleChange}>
            {roles.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
        </select>
                    </div>
                    <div>
                    <label>Enter User GPA:
                    <input 
                        type="text" 
                        name="gpa" 
                        value={inputs.gpa || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                <input type="submit" />
            </form>
            
            
            </div>
            </div>

        </div>
        </div>
   );
};

export default AddCourse;