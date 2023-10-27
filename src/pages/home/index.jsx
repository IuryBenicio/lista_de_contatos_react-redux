import { getDocs, collection } from "firebase/firestore"
import { db } from "../../firebaseconnection"
import { useEffect, useState } from "react"
import { ContainerContatos, ContainerPage, NomeCtt, ItemCtt, LoadContainer } from "./styles"
import CardAddCtt from "../../components/CardAddCtt"

function Home(){
  const [contatos, setContatos] = useState([])
  const contatoRef = collection(db, 'Lista-de-contatos')

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
            <CardAddCtt/>
            {contatos.length >= 1 ? (
              <ContainerContatos>
                <ul>
                  {contatos.map((e)=>(
                    <ItemCtt key={e.id}>
                      <NomeCtt>{e.Nome}</NomeCtt>
                      <p><span>({e.DDD})</span> {e.Numero}</p>
                    </ItemCtt>
                  ))}
                </ul>
              </ContainerContatos>
            ) : (
              <LoadContainer>
                <span>CARREGANDO ...</span>
              </LoadContainer>
            )}
          </ContainerPage>
      </>
  )

}

export default Home
