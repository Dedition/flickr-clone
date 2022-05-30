// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { GiMountainCave } from 'react-icons/gi';

import DemoUser from '../DemoUserButton/DemoUser';
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className='login-logo'>
        <GiMountainCave size={50} />
      </div>
      <div className="login-msg">
        <h1>Login Here</h1>
      </div>
      <ul className="login-errors errors">
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
      <div className="login-inputs">
        <input
          className="login-input"
          type="text"
          placeholder="Username or Email"
          value={credential}
          onChange={e => setCredential(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Log In</button>
        <DemoUser />
      </div>
    </form>

  );
}

export default LoginForm
