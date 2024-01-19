// src/components/CreateUser.jsx
import React, { useState } from 'react';

const CreateUser = () => {
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

    // If no validation errors, proceed with creating the user
    if (Object.values(validationErrors).every((error) => !error)) {
      // Add logic to save user to local storage or API
      console.log('User created:', user);
    }
  };

  const validateForm = () => {
    const validationErrors = {
      id: '',
      name: '',
      email: '',
      password: ''
    };

    // Validate id
    if (!user.id.trim()) {
      validationErrors.id = 'ID is required';
    }

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
    if (!user.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (user.password.length < 8) {
      validationErrors.password = 'Password should be 8 characters or more';
    }

    return validationErrors;
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={handleChange}
          />
          <span>{errors.id}</span>
        </div>
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
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
