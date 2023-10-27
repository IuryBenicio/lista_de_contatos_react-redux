import { RegisterStyle, Container } from "./styles";
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconnection";
import { useNavigate } from "react-router-dom";

function LoginPage(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function logarUsuario(){
    await signInWithEmailAndPassword(auth, email, senha)
    .then(()=>{
      navigate('/Home')
      setEmail('')
      setSenha('')
    })
    .catch((error)=>{
      if(error.code == 'account-exists-with-different-credential'){
        alert('email ou senha já existentes')
      }
    })
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

          <button onClick={logarUsuario} >Logar</button>
          <span>Não possui conta? faça seu cadastro</span>
        </Container>
      </RegisterStyle>
  )
}

export default LoginPage
