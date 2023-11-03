import { createSlice } from "@reduxjs/toolkit";

import { db } from "../../firebaseconnection";
import { addDoc, collection } from "firebase/firestore"


const initialState = {
  newCtt:{
    Nome:'',
    DDD:'',
    Numero:'',
    Email: ''
  }
}

const cttRef = collection(db, 'Lista-de-contatos')

async function addCtt(nome, ddd, numero, email, userUid){
  await addDoc(cttRef,{
    Created: new Date(),
    userUid: userUid,
    Nome: nome,
    DDD: ddd,
    Numero: numero,
    Email: email
  })
  .then(()=>{
  })
  .catch((error)=>{
    alert(error + 'erro ao salvar contato')
  })
}


export const cttSlice = createSlice({
  name: 'newCtt',
  initialState,
  reducers:{
      addContato:(state, action)=>{
        addCtt(action.payload.Nome, action.payload.DDD, action.payload.Numero, action.payload.Email, action.payload.userUid);
        return{ ...state,
          newCtt:{
            Nome: action.payload.Nome,
            DDD: action.payload.DDD,
            Numero: action.payload.Numero,
            Email: action.payload.Email
          }}
      },
      setState:(state, action)=>{
        return{
          ...state,
          newCtt:{
            Nome:action.payload.Nome,
            DDD: action.payload.DDD,
            Numero: action.payload.Numero,
            Email: action.payload.Email
          }
        }
      }
  }
})

export default cttSlice.reducer

export const{addContato} = cttSlice.actions
