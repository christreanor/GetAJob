import { useSelector } from 'react-redux';

function Home() {
  const theme = useSelector((state) => state.app.theme);
  
  return (
    <div className={`page-container ${theme}`}>
      <h1>Welcome to GetAJob</h1>
      <p>Your career journey starts here!</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Features</h2>
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