import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setAuthenticated, setUser } from '../store/slices/authSlice';
import Heading from '../components/common/Heading';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  // useAppSelector is already typed to RootState via our hooks.
  const error = useAppSelector((state) => state.auth.error);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated login - replace with actual authentication
    dispatch(setAuthenticated(true));
    dispatch(setUser({ name: 'Demo User', email: 'demo@example.com' }));
  };

  return (
    <div className="auth-container">
      <Heading text="Login" importance="h1" />
      <p>Please log in to access your profile and manage your job applications.</p>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
