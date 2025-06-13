import React from 'react';

const Dashboard: React.FC = () => (
  <div style={{backgroundColor: 'red', height: '100vh', display: 'flex', alignItems: 'center', gap: 16, padding: 32}}>
    <img src="/dashboard.svg" alt="Dashboard" style={{width: 32, height: 32}} />
    <h1>Dashboard</h1>
  </div>
);

export default Dashboard; 