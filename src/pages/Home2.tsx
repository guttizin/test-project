import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const Sidebar = styled.aside`
  width: 210px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  box-shadow: 2px 0 8px rgba(0,0,0,0.03);
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: #D97B41;
  padding: 32px 0 24px 32px;
  letter-spacing: 2px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li<{active?: boolean}>`
  display: flex;
  align-items: center;
  padding: 12px 32px;
  color: ${({active}) => active ? '#fff' : '#D97B41'};
  background: ${({active}) => active ? '#D97B41' : 'transparent'};
  border-radius: 8px;
  margin: 4px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  svg, span.icon { margin-right: 12px; }
`;

const UserSection = styled.div`
  padding: 24px 0 24px 32px;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
`;

const Main = styled.main`
  flex: 1;
  background: #f5f5f7;
  padding: 40px 48px;
  min-height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Greeting = styled.div`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 24px;
  span { font-weight: bold; }
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: #D97B41;
  margin-bottom: 32px;
  svg, span.icon { margin-right: 10px; }
`;

const Home2: React.FC = () => {
  const { logout } = useAuth();
  // Placeholder user
  const user = { name: 'Kaique Steck', role: 'Administrador' };

  return (
    <Layout>
      <Sidebar>
        <div>
          <Logo>🏆 TROPA</Logo>
          <Menu>
            <MenuItem><span className="icon">🏠</span>Dashboard</MenuItem>
            <MenuItem active><span className="icon">📅</span>Eventos</MenuItem>
            <MenuItem><span className="icon">👥</span>Equipes</MenuItem>
            <MenuItem><span className="icon">📝</span>Inscrições</MenuItem>
          </Menu>
        </div>
        <UserSection>
          <Avatar>R</Avatar>
          <UserInfo>
            <div>{user.name}</div>
            <div style={{fontSize: '0.85em', color: '#888'}}>{user.role}</div>
            <div style={{marginTop: 8, color: '#D97B41', cursor: 'pointer'}} onClick={logout}>Sair</div>
          </UserInfo>
        </UserSection>
      </Sidebar>
      <Main>
        <Greeting>Bem vindo de volta, <span>Kaique Steck</span></Greeting>
        <SectionTitle><span className="icon">←</span>Eventos</SectionTitle>
        {/* Main content (table, etc.) goes here */}
      </Main>
    </Layout>
  );
};

export default Home2;
