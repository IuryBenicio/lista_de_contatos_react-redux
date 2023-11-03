import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RegisterStyle, Container, SpanSenha } from "./styles";
import { Cadastra } from "../../redux/user/slice";


function RegisterPage(){
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  function cadastrar(){
    dispatch(Cadastra({
      email: email,
      senha: senha
    }))
      setEmail('')
      setSenha('')
      navigate('/Home', {replace: true})
  }



  return(
      <RegisterStyle>
        <Container>
          <h2>Faça seu cadastro</h2>

          <input placeholder="Digite seu Email"
          onChange={evento => setEmail(evento.target.value)}
          type="text" value={email} />

          <input placeholder="Digite sua senha"
          onChange={evento => setSenha(evento.target.value)}
          type="text" value={senha} />
          <SpanSenha>senha deve ter pelo menos 6 dígitos</SpanSenha>

          <button onClick={cadastrar}>Cadastrar</button>
          <Link to='/Login'>Já possui conta? faça seu login</Link>
        </Container>
      </RegisterStyle>
  )
}

export default RegisterPage
