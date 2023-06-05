import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send API request to the Laravel backend with email and password
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" value={email} onChange={handleEmailChange} required />

      <label>Password</label>
      <input type="password" value={password} onChange={handlePasswordChange} required />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
