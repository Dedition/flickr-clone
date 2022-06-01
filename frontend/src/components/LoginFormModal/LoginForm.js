//* React
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FaPhoenixFramework } from 'react-icons/fa';

//* Store
import * as sessionActions from '../../store/session';

//* Files & Components
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
      <FaPhoenixFramework size={50} id="login-logo" />
      <h1 id="login-msg">Login Here</h1>
      <ul className="login-errors errors">
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
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
      <DemoUser id="demoUser" />
    </form>

  );
}

export default LoginForm
