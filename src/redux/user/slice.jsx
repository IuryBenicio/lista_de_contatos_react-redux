import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconnection";

const initialState = {
  user:{
    email: '',
    logado: false
  }
}

async function CadastraUser(email, senha){
  await createUserWithEmailAndPassword(auth, email, senha)
  .then(()=>{
  })
  .catch((erro)=>{
    alert(`erro ${erro}`)
    if(erro.code === 'auth/email-already-in-use'){
      alert('email já cadastrado')
    }else if(erro.code === 'auth/weak-password'){
      alert('senha curta demais')
    }
  })
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    login: (state, action) => {
      if(!state.user.logado){
      return{
        ...state,
        user:{
          email: action.payload.email,
          logado: true
        }
      }}
    },
    Cadastra: (state, action)=>{
      CadastraUser(action.payload.email, action.payload.senha)
      return{...state}
    }
  }
})

export default userSlice.reducer

export const{login, Cadastra} = userSlice.actions
