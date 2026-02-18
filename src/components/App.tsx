import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleTheme } from '../store/slices/appSlice';

import '../styles/global.css';
import '../styles/layout.css';
import '../styles/auth.css';
import '../styles/responsive.css';
import '../styles/game.css';

const Home = lazy(() => import('../pages/Home'));
const Profile = lazy(() => import('../pages/Profile'));
const Login = lazy(() => import('../pages/Login'));
const MatildaMan = lazy(() => import('../pages/MatildaMan'));
const JsTest = lazy(() => import('../pages/JsTest'));

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.app.theme);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

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
            <Link to="/jstest">JS Test</Link>
          </div>
          <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>

        <div className="page-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/game" element={<MatildaMan />} />
              <Route path="/jstest" element={<JsTest />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
