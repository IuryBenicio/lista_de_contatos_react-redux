import { collection, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy, where } from "firebase/firestore"
import { addContato } from "../../redux/Contact/slice";
import { db } from "../../firebaseconnection"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { ContainerPage, ContainerAddCtt, InputsAddCtt, ButtonContainer, Sair } from "./styles"
import CttContainer from "../../components/CttContainer"
import { LogOut } from "../../redux/user/slice";


function Home(){

  const dispatch = useDispatch();

  const [user, setUser] = useState([]);
  const [editando, setEditando] = useState(false)
  const [contatos, setContatos] = useState([])
  const [idCtt, setId] = useState('')
  const [nome, setNome] = useState('')
  const [DDD, setDDD] = useState('')
  const [numero, setNumero] = useState('')
  const [email,setEmail] = useState('')

  ///////////ADICIONA CONTATO///////////////
  function handleAddCtt(){
    if(nome === ''){
      alert('PRECISA DIGITAR UM NOME AO CONTATO')
      return
    }else{
      dispatch(addContato({
        userUid: user?.uid,
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
  }
  ///////////SET INPUT FUNC///////////////
  function setInputEdit(e){
    setEditando(true)
    setNome(e.Nome)
    setEmail(e.Email)
    setNumero(e.Numero)
    setDDD(e.DDD)
    setId(e.id)
  }

  ///////////EDITA CONTATO///////////////
  async function EditCtt(){
    const ContatoRef = doc(db, 'Lista-de-contatos', idCtt)
    await updateDoc(ContatoRef, {
      Nome: nome,
      DDD: DDD,
      Numero: numero,
      Email: email
    })
    .then(()=>{
      alert('Contato Atualizado')
      setEditando(false)
      setDDD('')
      setEmail('')
      setNome('')
      setNumero('')
      setId('')
    })
    .catch((e)=>{
      alert('erro ao salvar novos dados ao contato')
      console.log(e)
    })
  }
    ///////////ATUALIZA CONTATOS///////////////
  async function AtualizaAgenda(){
    // eslint-disable-next-line no-unused-vars
    const userDetail = localStorage.getItem('@detailUser')
    setUser (JSON.parse(userDetail))

    if(userDetail){
      const data = JSON.parse(userDetail);

      const cttRef = collection(db, 'Lista-de-contatos')
      const q = query(cttRef, orderBy('Created', 'desc'), where('userUid', '==', data?.uid))

      // eslint-disable-next-line no-unused-vars
      const semuso = onSnapshot(q, (e)=>{
        let lista = []

        e.forEach((doc)=>{
          lista.push({
            id: doc.id,
            Nome: doc.data().Nome,
            DDD: doc.data().DDD,
            Numero: doc.data().Numero,
            Email: doc.data().Email,
            userUid: doc.data().userUid
          })
        })
        console.log(lista)
        setContatos(lista)
      })
    }
  }

  ///////////EXCLUI CONTATO///////////////
  async function excluirContato(e){
    const cttRef = doc(db, 'Lista-de-contatos', e.id)
    await deleteDoc(cttRef)
    .then(()=>{
      alert(`contato ${e.Nome} foi apagado`)
    })
    .catch((erro)=>{
      alert(`erro ao apagar contato ${e.Nome}. código do erro ${erro} `)
    })
  }
///////////////// SAIR //////////////////////
function Logout(){
  dispatch(LogOut())
}

    ///////////PROCESSOS AO INICIAR///////////////
  useEffect(()=>{
    AtualizaAgenda()
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
                  (<button onClick={EditCtt}>Salvar</button>)}

              </ButtonContainer>
            </ContainerAddCtt>
            <CttContainer func={setInputEdit} funcExc={excluirContato} list={contatos}/>
            <Sair onClick={Logout}> SAIR </Sair>
          </ContainerPage>
      </>
  )
}

export default Home
