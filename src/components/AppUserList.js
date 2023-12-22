import React from 'react';

const AppUserList = ({ users, handleUpdateUser, handleDeleteUser }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} ({user.email}) - {user.role}
          <button onClick={() => handleUpdateUser(user._id, { role: user.role === 'Admin' ? 'Regular' : 'Admin' })}>
            Toggle Role
          </button>
          <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

};

export default AppUserList;