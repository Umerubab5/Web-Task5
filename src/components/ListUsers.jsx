// src/components/ListUsers.jsx
import React, { useState, useEffect } from 'react';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching the list of users (you may replace this with actual data fetching logic)
    const fetchedUsers = [
      { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
      // Add more user data as needed
    ];

    setUsers(fetchedUsers);
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id}, <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;
