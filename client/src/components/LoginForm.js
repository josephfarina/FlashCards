import PropTypes from 'prop-types';
import React, { useState } from 'react';

import flashcardService from '../services/flashcardService';
import loginService from '../services/loginService';
import CreateAccountForm from './CreateAccountForm';

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [createAccount, setCreateAccount] = useState(false);
  const [accountCreationMessage, setAccountCreationMessage] = useState('');
  const [error, setError] = useState(null);

  LoginForm.propTypes = {
    setUser: PropTypes.func.isRequired,
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      console.log('user', user);
      window.localStorage.setItem(
        'loggedFlashcardAppUser',
        JSON.stringify(user)
      );
      flashcardService.setToken(user.token);
      console.log(user.username, 'logged in');
      setUsername('');
      setPassword('');
      setUser(user);
    } catch (ex) {
      setError('Incorrect Username/Password');
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const loginFormStyle = {
    gridTemplateRows: error
      ? 'repeat(3,1fr) .5fr repear(2, 1fr)'
      : 'repeat(5,1fr)',
  };

  return (
    <div className={'login noselect'}>
      {!createAccount ? (
        <form
          className={'login-form'}
          onSubmit={handleLogin}
          style={loginFormStyle}
        >
          <h3>Login</h3>
          <input
            type="text"
            className={'login-form-input'}
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            placeholder="username"
          />
          <input
            className={'login-form-input'}
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            placeholder="password"
          />
          {error ? <p className={'error-message'}>{error}</p> : ''}
          <button type="submit" className="login-form-button">
            login
          </button>
          <button
            className="login-form-button"
            onClick={() => setCreateAccount(true)}
          >
            Create Account
          </button>
        </form>
      ) : (
        <CreateAccountForm setCreateAccount={setCreateAccount} />
      )}
    </div>
  );
};

export default LoginForm;
