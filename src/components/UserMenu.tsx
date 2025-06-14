// UserMenu.tsx

import React from 'react';
import styled from 'styled-components';

// --- 1. Ícones como Componentes React (para máxima flexibilidade) ---

// const UserIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//     <circle cx="12" cy="7" r="4"></circle>
//   </svg>
// );

//const Icon getting from src/assets/icons/user.svg sizing 15x15, brightness 0 invert 0
const UserIcon = () => (
  <img src="/user.svg" alt="User" width={15} height={15} style={{ filter: 'brightness(0) invert(0)' }} />
);

// const LogoutIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
//     <polyline points="16 17 21 12 16 7"></polyline>
//     <line x1="21" y1="12" x2="9" y2="12"></line>
//   </svg>
// );

const LogoutIcon = () => (
  <img src="/logout1.svg" alt="Logout" width={15} height={15} style={{ filter: 'brightness(0) invert(0)' }} />
);

// --- 2. Definição dos Styled Components ---
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  gap: 5px;
  padding-top: 30px;
  border-right-width: 1px;
  padding-bottom: 30px;
  padding-right: 25px;
  padding-left: 25px;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;


`;

const UserInfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
`;

const UserRole = styled.span`
  font-size: 11px;
  font-weight: 400;
  color:rgba(0, 0, 0, 0.5);
`;

const ActionItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
  color: #111827;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;

  /* Estiliza o SVG diretamente dentro do link */
  svg {
    color: #4B5563;
  }

  &:hover {
    background-color: #F3F4F6;
    cursor: pointer;
  }
`;


// --- 3. O Componente Principal ---

// Definindo as props para tornar o componente reutilizável
interface UserMenuProps {
  userName: string;
  userRole: string;
  avatarUrl: string;
  onEditProfile: () => void;
  onLogout: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ 
  userName, 
  userRole, 
  avatarUrl, 
  onEditProfile, 
  onLogout 
}) => {
  return (
    <Container>
      <UserInfoSection>
        <Avatar src={avatarUrl} alt={`Avatar de ${userName}`} />
        <UserDetails>
          <UserName>{userName}</UserName>
          <UserRole>{userRole}</UserRole>
        </UserDetails>
      </UserInfoSection>

      {/* <Separator /> */}

      <ActionItem href="#" onClick={onEditProfile}>
        <UserIcon />
        <span>Alterar dados</span>
      </ActionItem>

      <ActionItem href="#" onClick={onLogout}>
        <LogoutIcon />
        <span>Sair</span>
      </ActionItem>
    </Container>
  );
};
