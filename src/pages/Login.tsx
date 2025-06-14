import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fb;
`;
const LoginBox = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(44, 44, 44, 0.08);
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
const FormSection = styled.div`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 350px;
`;
const Title = styled.h2`
  color: #d26b3a;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 8px;
`;
const Subtitle = styled.p`
  color: #7c7c7c;
  font-size: 1rem;
  margin-bottom: 32px;
`;
const Illustration = styled.div`
  background: #d26b3a;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  min-height: 400px;
`;

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err: any) {
      setError('Credenciais inválidas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <FormSection >
          <img src={'/logo.svg'} alt="Logo" style={{width: 120, marginBottom: 16}} />
          <Title>Bem-vindo de volta</Title>
          <Subtitle>Entre com sua conta para acessar o painel.</Subtitle>
          <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <Input label="E-mail" placeholder="seunome@seuservidor.com" type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <Input label="Senha" placeholder="Digite aqui" type="password" showEye value={password} onChange={e => setPassword(e.target.value)} />

            {error && <div style={{ marginBottom: 8}}>{error}</div>}
            <Button type="submit" style={{marginTop: 24}} disabled={loading}>{loading ? 'Entrando...' : 'Enviar'}</Button>
            </div>
          </form>
        </FormSection>
        <Illustration>
          <img src={'/monitoring 1.png'} alt="Ilustração" style={{width: 320}} />
        </Illustration>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;