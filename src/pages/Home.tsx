import React from 'react';
import { useAppSelector } from '../store/hooks';
import Heading from '../components/common/Heading';

function Home(): JSX.Element {
  const theme = useAppSelector((state) => state.app.theme);
  
  return (
    <div className={`page-container ${theme}`}>
      <Heading text="Welcome to GetAJob" importance="h1" />
      <p>Your career journey starts here!</p>
      <div style={{ marginTop: '2rem' }}>
        <Heading text="Features" importance="h2" />
        <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
          <li>Track your job applications</li>
          <li>Manage your professional profile</li>
          <li>Get insights on your job search</li>
          <li>Stay organized and focused</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
