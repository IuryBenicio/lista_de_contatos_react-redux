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

async function addCtt(nome, ddd, numero, email){
  await addDoc(cttRef,{
    Nome: nome,
    DDD: ddd,
    Numero: numero,
    Email: email
  })
}


export const cttSlice = createSlice({
  name: 'newCtt',
  initialState,
  reducers:{
      addContato:(state, action)=>{
        addCtt(action.payload.Nome, action.payload.DDD, action.payload.Numero, action.payload.Email);
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
