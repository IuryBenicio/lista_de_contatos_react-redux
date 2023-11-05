/* eslint-disable react/prop-types */
import {ItemCtt, NomeCtt, LoadContainer, ContainerContatos } from "../../pages/home/styles"

function CttContainer(props){
  return(
    <>
      <ContainerContatos>
        {props.carregando === false ? (
            <ul>
              {props.list.map((e)=>(
                <ItemCtt key={e.id}>
                  <NomeCtt>{e.Nome}</NomeCtt>
                  <p>{e.Email}</p>
                  <p><span>{e.DDD}</span> {e.Numero}</p>
                  <button onClick={()=>props.func(e)} >edit</button><button onClick={()=>props.funcExc(e)}>remove</button>
                </ItemCtt>
              ))}
            </ul>
          ) : (
          <LoadContainer>
            <span>CARREGANDO ...</span>
          </LoadContainer>
        )}
      </ContainerContatos>
    </>
  )
}


export default CttContainer
