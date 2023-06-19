import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthLayout, { Row, Title, Label } from "../../layouts/Auth";
import { clientInfo } from "../../assets/clientInfo";
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from "../../components/Link";

import useSignUp from '../../hooks/api/useSignUp';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const { loadingSignUp, signUp } = useSignUp();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/login');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
        console.log('error: ', error)
      }
    }
  }

  return (
    // <>HELLO! login here</>
    <AuthLayout background={clientInfo.backgroundImageUrl}>
      <Row>
        <img src={clientInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{clientInfo.title}</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>Inscrever</Button>
        </form>
      </Row>
      <Row>
        <Link to="/login">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  )
}
