import { RegisterStyle, Container } from "./styles";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Loga } from "../../redux/user/slice";
import { useDispatch } from "react-redux";

function LoginPage(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function logarUsuario(){
    dispatch(Loga({
      email: email,
      senha: senha
    }))
    navigate('/Home')
  }

  return(
      <RegisterStyle>
        <Container>
          <h2>Faça seu Login</h2>

          <input placeholder="Digite seu Email"
          onChange={evento => setEmail(evento.target.value)}
          type="text" value={email} />

          <input placeholder="Digite sua senha"
          onChange={evento => setSenha(evento.target.value)}
          type="text" value={senha} />

          <button onClick={logarUsuario}>Logar</button>
          <Link to='/'>Não possui conta? faça seu cadastro</Link>
        </Container>
      </RegisterStyle>
  )
}

export default LoginPage
