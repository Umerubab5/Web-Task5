import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
    // Add more static users as needed
  ]);

  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
    }
  };

  const handleCreateUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className='container'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/create-user">Create User</Link></li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} currentUser={currentUser} />} />
          <Route path="/create-user"  element={<CreateUserPage onCreateUser={handleCreateUser} />} /> 
        </Routes>
      </div>
    </Router>
  );
};

// Home component
const Home = () => {
  return <h2>Home</h2>;
};

// Login page component
const LoginPage = ({ onLogin, currentUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
    setUsername('');
    setPassword('');
  };

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Create user page component
const CreateUserPage = ({ onCreateUser }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCreateUser = () => {
    const newUser = {
      id: Date.now(),
      username: newUsername,
      password: newPassword,
    };

    onCreateUser(newUser);
    setNewUsername('');
    setNewPassword('');
  };

  return (
    <div className="create-user-container">
      <h2>Create User</h2>
      <input type="text" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

// Protected route component
const ProtectedRoute = ({ element, currentUser }) => {
  return currentUser ? element : <Navigate to="/login" />;
};

export default App;





