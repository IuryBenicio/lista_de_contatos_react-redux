import { useState } from "react"
import { useDispatch } from "react-redux"
import { ContainerAddCtt, InputsAddCtt } from "./styles"
import { addContato } from "../../redux/Contact/slice";


function CardAddCtt(){
  const dispatch = useDispatch();

  const [nome, setNome] = useState('')
  const [DDD, setDDD] = useState('')
  const [numero, setNumero] = useState('')
  const [email,setEmail] = useState('')

  function handleAddCtt(){
    dispatch(addContato({
      Nome: nome,
      DDD: DDD,
      Numero: numero,
      Email: email
    }))
    setDDD('')
    setEmail('')
    setNome('')
    setNumero('')
  }

  return(
    <>
      <ContainerAddCtt>
        <h2>Adicione um novo contato</h2>
        <InputsAddCtt>
          <input onChange={e=>setNome(e.target.value)} value={nome} type="text" placeholder="digite o nome do contato" />
          <input onChange={e=>setDDD(e.target.value)} value={DDD} type="text" placeholder="digite DDD" />
          <input onChange={e=>setNumero(e.target.value)} value={numero} type="text" placeholder="digite Numero" />
          <input onChange={e=>setEmail(e.target.value)} value={email} type="text" placeholder="digite o email do contato" />
          <button onClick={handleAddCtt}>Enviar</button>
        </InputsAddCtt>
      </ContainerAddCtt>
    </>
  )
}

export default CardAddCtt
