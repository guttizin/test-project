import React from 'react';
import styled from 'styled-components';

const Eventos: React.FC = () => (
  <div style={{display: 'flex', alignItems: 'center', gap: 16, padding: 32}}>
    <img src="/calendar.svg" alt="Eventos" style={{width: 32, height: 32}} />
    <h1>Eventos</h1>
  </div>
);

export default Eventos; 