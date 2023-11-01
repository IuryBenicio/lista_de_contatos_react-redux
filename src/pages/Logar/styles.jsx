import styled from "styled-components";

export const RegisterStyle = styled.div`
  height:calc(100vh - 95px) ;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2{
    font-size: 40px;
    margin: 0;
    margin-bottom: 8px;
  }
  input{
    text-align: center;
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 0.1px solid black;
    margin-top: 16px;
  }
  input:focus{
    outline: none;
  }
  button{
    width: 100%;
    border: none;
    margin: 16px auto;
    padding: 8px;
    border-radius: 8px;
    background-color: #5353f3;
    color: white;
  }
  button:hover{
    background-color: #2222c2;
  }
  button:active{
    background-color: #1a1a1a;
  }
  a{
    text-decoration: none;
    color: #1a1a1a;
  }
  a:hover{
    color: #727272;
  }
`
