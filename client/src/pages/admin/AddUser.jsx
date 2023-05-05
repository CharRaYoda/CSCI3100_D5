//Add User Page

//imports
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReturnHome from './image/ReturnHome.png'
import Del from './image/Delete.png'
import { Link } from 'react-router-dom';
import Search from './image/Search.png'

//const var
const AddUser = () => {
    const [inputs, setInputs] = useState({});
    const roles = ["select", "student", "teacher", "admin"];
    const [response, setResponse] = useState(null);
    const [err, setError] = useState(null);
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    {/* Confirm window upon form submission */}
    const handleSubmit = async(event) => {
        event.preventDefault();
        let answer = window.confirm("Confirm to add the user : "+ inputs.uid + " ?")

        try {
            if (answer){
              const resp = await axios.post('/users/add',inputs);
              setResponse(resp.data);
              setError(null);
            }
          } catch (err) {
            setError(err.response.data);
            setResponse(null);
          }
    }

    return (
        <div className='AddUser'>
        <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
            {/* Side Bar */}
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

            <div>
            <a>Add User by entering Course Info</a>
            <div>
                {/* Add User Form */}
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Enter User Name (Ray Wong):
                    <input 
                        type="text" 
                        name="username" 
                        value={inputs.username || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <label>Enter the User ID (e.g. 1234) (Numeric):
                    <input 
                        type="text" 
                        name="uid" 
                        value={inputs.uid || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <div>
                    <label>Enter the Temporary User Password (e.g.123456):
                    <input 
                        type="text" 
                        name="password" 
                        value={inputs.password || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div>
                    <label>Enter User email (e.g. abc@gmail.com):
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
                <input type="submit" />
                {response && <p className="response">{response}</p>}
                {err && <p className="err">{err}</p>}
            </form>
            
            
            </div>
            </div>

        </div>
        </div>
   );
};

export default AddUser;