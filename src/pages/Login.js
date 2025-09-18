import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated, setUser } from '../store/slices/authSlice';
import Heading from '../components/common/Heading';


function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
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