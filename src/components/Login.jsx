// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = ({user}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

console.log(user);




  const handleLogin = () => {
  const isUser = user.find((item) => item.email === email && item.password === password);
console.log(isUser);
    if (email === 'admin@gmail.com' && password === 'admin1234') {
      localStorage.setItem('isLoggedIn', true);
     
      alert('Validate successfull');
      navigate('/listUsers');
      /*
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
     */
    }
    else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
      

    </div>
  );
};

export default Login;
