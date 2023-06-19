import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout, { Row, Title, Label } from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';

import { clientInfo } from '../../assets/clientInfo';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/home');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 

  return (
    <AuthLayout background={clientInfo.backgroundImageUrl}>
      <Row>
        <img src={clientInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{clientInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
      </Row>
      <Row>
        <Link to="/register">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
