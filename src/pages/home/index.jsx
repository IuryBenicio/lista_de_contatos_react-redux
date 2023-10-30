import { getDocs, collection, doc, updateDoc } from "firebase/firestore"
import { addContato } from "../../redux/Contact/slice";
import { db } from "../../firebaseconnection"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { ContainerPage, ContainerAddCtt, InputsAddCtt, ButtonContainer } from "./styles"
import CttContainer from "../../components/CttContainer"


function Home(){

  const dispatch = useDispatch();
  const contatoRef = collection(db, 'Lista-de-contatos')

  const [editando, setEditando] = useState(false)
  const [contatos, setContatos] = useState([])
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


  async function EditCtt(e){
    setNome(e.Nome)
    setEmail(e.Email)
    setNumero(e.Numero)
    setDDD(e.DDD)
    const ContatoRef = doc(db, 'Lista-de-contatos', e.id)
    await updateDoc(ContatoRef, {
      Nome: nome,
      DDD: DDD,
      Numero: numero,
      Email: email
    })
    .then(()=>{
      alert('Contato Atualizado')
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  async function BuscaContato(){
    await getDocs(contatoRef)
    .then((e)=>{
      let lista = []
      e.forEach((doc)=>{
        lista.push({
          id: doc.id,
          Nome: doc.data().Nome,
          DDD: doc.data().DDD,
          Numero: doc.data().Numero,
          Email: doc.data().Email
        })
      })
      setContatos(lista)
      console.log(lista)
    })
    .catch((e)=>{
      alert('não conseguimos achar seus contatos' + e)
    })
  }

  useEffect(()=>{
    BuscaContato()
  },[])

  return(
      <>
          <ContainerPage>
            <ContainerAddCtt>
              <h2>Adicione um novo contato</h2>
              <InputsAddCtt>
                  <input onChange={e=>setNome(e.target.value)} value={nome} type="text" placeholder="digite o nome do contato" />
                  <input onChange={e=>setDDD(e.target.value)} value={DDD} type="text" placeholder="digite DDD" />
                  <input onChange={e=>setNumero(e.target.value)} value={numero} type="text" placeholder="digite Numero" />
                  <input onChange={e=>setEmail(e.target.value)} value={email} type="text" placeholder="digite o email do contato" />
              </InputsAddCtt>
              <ButtonContainer>
                  {!editando ?
                  (<button onClick={handleAddCtt}>Enviar</button>) :
                  (<button onClick='#'>Salvar</button>)}

              </ButtonContainer>
            </ContainerAddCtt>
            <CttContainer func={EditCtt} list={contatos}/>
          </ContainerPage>
      </>
  )
}

export default Home
