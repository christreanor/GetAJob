import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/slices/appSlice';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import MatildaMan from '../pages/MatildaMan';
import '../styles/global.css';
import '../styles/layout.css';
import '../styles/auth.css';
import '../styles/responsive.css';
import '../styles/game.css';

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.app);
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <nav className="nav">
          <div className="nav-links">
            <Link to="/">Home</Link>
            {isAuthenticated ? (
              <Link to="/profile">Profile</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <Link to="/game">Play Game</Link>
          </div>
          <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/game" element={<MatildaMan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;