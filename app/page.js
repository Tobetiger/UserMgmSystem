"use client"

import React, { useState } from 'react';

    const Home = ({ handleCreateUser }) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [role, setRole] = useState('Regular');
    
      const handleAddUser = () => {
        handleCreateUser({ name, email, role });
        setName('');
        setEmail('');
        setRole('Regular');
      };
    

  return (
    
     <>
        <div>
          <h2>Add User</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <select onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="Regular">Regular User</option>
            <option value="Admin">An Admin</option>
          </select>
          <button onClick={handleAddUser}>Add User</button>
        </div>
     </>
      );
    };

    
    export default Home;
