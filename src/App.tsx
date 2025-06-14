import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Eventos from './pages/Eventos';
import Equipes from './pages/Equipes';
import Inscricoes from './pages/Inscricoes';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            >
              <Route index element={<Eventos />} />
              <Route path="eventos" element={<Eventos />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="equipes" element={<Equipes />} />
              <Route path="inscricoes" element={<Inscricoes />} />
            </Route>
          </Routes>
        </AppContainer>
      </Router>
    </AuthProvider>
  );
}

export default App; 