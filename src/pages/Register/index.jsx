import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/user/slice";
import { Link } from "react-router-dom";
import { RegisterStyle, Container, SpanSenha } from "./styles";
import { auth } from "../../firebaseconnection";
import { createUserWithEmailAndPassword } from "firebase/auth";


function RegisterPage(){
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((rootReducer) => rootReducer.user)
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  async function cadastrar(){
    await createUserWithEmailAndPassword(auth, email, senha)
    .then((value)=>{
      dispatch(login({
        email: email
      }))
      setEmail('')
      setSenha('')
      console.log(value)
      console.log(user)
      // navigate('/Home')
    })
    .catch((error)=>{
      if(error.code === 'auth/email-already-in-use'){
        alert('email já cadastrado')
      }else if(error.code === 'auth/weak-password'){
        alert('senha curta demais')
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
          <SpanSenha>senha deve ter pelo menos 6 dígitos</SpanSenha>

          <button onClick={cadastrar}>Cadastrar</button>
          <Link to='/'>Já possui conta? faça seu login</Link>
        </Container>
      </RegisterStyle>
  )
}

export default RegisterPage
