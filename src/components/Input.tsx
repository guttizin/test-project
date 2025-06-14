import React, { useState } from 'react';
import styled from 'styled-components';
import EyeIcon from './EyeIcon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;
const Label = styled.label`
  color: #d26b3a;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 6px;
`;
const InputField = styled.input<{ hasIcon?: boolean }>`
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  padding: 10px 14px;
  font-size: 1rem;
  outline: none;
  width: 100%;
  ${props => props.hasIcon && 'padding-right: 0px;'}
`;
const IconWrapper = styled.span`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    showEye?: boolean;
    icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, showEye, icon, type = 'text', ...props }) => {
    const [visible, setVisible] = useState(false);
    const inputType = showEye ? (visible ? 'text' : 'password') : type;
    const hasIcon = Boolean(icon || showEye);
    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <InputWrapper>
                <InputField {...props} type={inputType} hasIcon={hasIcon} />
                {icon ? (
                    <IconWrapper>{icon}</IconWrapper>
                ) : showEye ? (
                    <IconWrapper onClick={() => setVisible(v => !v)}>
                        <EyeIcon style={{ opacity: visible ? 0.5 : 1 }} />
                    </IconWrapper>
                ) : null}
            </InputWrapper>
        </Wrapper>
    );
};

export default Input; 