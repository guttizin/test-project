import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu } from '../components/UserMenu';

const Sidebar = styled.aside`
  width: 210px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0;
  padding-top: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  gap: 10px;
  box-shadow: 2px 0 8px rgba(0,0,0,0.03);
`;

const Logo = styled.div`
  padding: 0 25px 0 25px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled(NavLink) <{ end?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 32px;
  color: #252525;
  background: transparent;
  border-radius: 8px;
  margin: 4px 16px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  svg, img { margin-right: 12px; }
  img {
    filter: brightness(0) invert(0);
    transition: filter 0.2s;
    width: 15px;
    height: 15px;
  }
  &.active {
    color: #fff;
    background: #CC6237;
    img {
      filter: brightness(0) invert(1);
    }
  }
`;

const Main = styled.main`
  flex: 1;
  background: #F5F5F5;
  padding: 40px 48px;
  // min-height: 100vh;
  overflow-y: auto;
`;

const Layout = styled.div`
  display: flex;
  max-height: 100vh;
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
  color: #CC6237;
  margin-bottom: 32px;
  svg, span.icon { margin-right: 10px; }
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #E5E7EB;
  margin: 8px 16px;
`;

const MenuTitle = styled.div`
  font-size: 12px;
  color: #b0b0b0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
  margin: 18px 0 6px 32px;
`;

const menuItems = [
  { label: 'Dashboard', icon: '/dashboard.svg', path: '/dashboard' },
  { label: 'Eventos', icon: '/calendar.svg', path: '/' },
  { label: 'Equipes', icon: '/team.svg', path: '/equipes' },
  { label: 'Inscrições', icon: '/inscricoes.svg', path: '/inscricoes' }
];

const Home: React.FC = () => {
  const { logout } = useAuth();
  // Placeholder user
  const user = { name: 'Kaique Steck', role: 'Administrador' };

  const handleLogout = () => {
    logout();
  };
  
  const handleEditProfile = () => {
    alert('Redirecionando para a página de edição de perfil...');
  };

  return (
    <Layout>
      <Sidebar>
        <div style={{ flexGrow: 8 }}>
          <Logo>
            <img src="/logo.svg" alt="Tropa Digital Logo" />
          </Logo>
          <MenuTitle>Menu</MenuTitle>
          <Menu>
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                to={item.path}
                end={item.path === '/'}
              >
                <img src={item.icon} alt={item.label + ' icon'} />
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <Separator />
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <UserMenu
            userName={user.name}
            userRole={user.role}
            avatarUrl="https://i.pravatar.cc/42?img=8" // Usando um avatar específico
            onEditProfile={handleEditProfile}
            onLogout={handleLogout}
          />
        </div>

      </Sidebar>
      <Main>
        <Greeting>Bem vindo de volta, <span>{user.name}</span></Greeting>
        <SectionTitle><span className="icon">←</span>Eventos</SectionTitle>
        <Outlet />
      </Main>
    </Layout>
  );
};

export default Home; 