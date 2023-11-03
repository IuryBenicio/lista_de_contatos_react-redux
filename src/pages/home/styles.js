import styled from "styled-components";

export const Sair = styled.a`
  position: absolute;
  bottom: 20px;
  left: 20px;
  text-decoration: none;
  border: 1px solid black;
  padding: 10px;
  background-color: #5353f3;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #2222c2
  }
`

export const ContainerContatos=styled.div`
  margin-top: 16px;
ul{
    gap: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    list-style: none;
    padding: 0;
  }
`
export const ItemCtt = styled.li`
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  border-radius: 8px;
  button{
    border: 1px solid black;
    border-radius: 8px;
    width: 50%;
  }
`
export const ContainerPage = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NomeCtt = styled.span`
  font-weight: bold;
`
export const LoadContainer = styled.div`
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
span{
  font-size: 50px;
}
`

export const ContainerAddCtt = styled.div`
  border: 1px solid black;
  border-radius: 16px;
  margin-top: 24px;
  padding:  15px;
  text-align: center;
  h2{
    padding-bottom: 10px;
  }
`
export const ButtonContainer = styled.div`
  margin-top: 14px;
  button{
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
  }
`
export const InputsAddCtt = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    input{
      border-radius: 4px;
      border: 1px solid black;
    }
`
