// src/components/EditUser.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Simulate fetching user data based on userId (you may replace this with actual data fetching logic)
    const fetchedUserData = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123'
    };

    setUser(fetchedUserData);
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // If no validation errors, proceed with updating the user
    if (Object.values(validationErrors).every((error) => !error)) {
      // Add logic to update user in local storage or API
      console.log('User updated:', user);
    }
  };

  const validateForm = () => {
    const validationErrors = {
      id: '',
      name: '',
      email: '',
      password: ''
    };

    // Validate name
    if (!user.name.trim()) {
      validationErrors.name = 'Name is required';
    } else if (user.name.length < 5 || user.name.length > 10) {
      validationErrors.name = 'Name should be between 5 and 10 characters';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!emailRegex.test(user.email)) {
      validationErrors.email = 'Invalid email address';
    }

    // Validate password
    if (user.password.trim() && user.password.length < 8) {
      validationErrors.password = 'Password should be 8 characters or more';
    }

    return validationErrors;
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <span>{errors.name}</span>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <span>{errors.password}</span>
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
