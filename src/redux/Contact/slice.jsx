import { createSlice } from "@reduxjs/toolkit";

import { db } from "../../firebaseconnection";
import { addDoc, collection } from "firebase/firestore"

const cttRef = collection(db, 'Lista-de-contatos')

async function addCtt(nome, ddd, numero, email){
  await addDoc(cttRef,{
    Nome: nome,
    DDD: ddd,
    Numero: numero,
    Email: email
  })
}

const initialState = {
  newCtt:{
    Nome:'',
    DDD:'',
    Numero:""
  }
}

export const cttSlice = createSlice({
  name: 'contato',
  initialState,
  reducers:{
      addContato:(state,action)=>{
        addCtt(action.payload.Nome, action.payload.DDD, action.payload.Numero, action.payload.Email);
        return{ ...state}
      }
  }
})

export default cttSlice.reducer

export const{addContato} = cttSlice.actions
