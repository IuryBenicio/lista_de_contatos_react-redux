import styled from "styled-components";

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
