import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #d26b3a;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #b85a2e;
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button; 