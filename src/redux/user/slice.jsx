import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseconnection";

const initialState = {
  user:{
    email: '',
    logado: false
  }
}

async function LogOutUser(){
  await signOut(auth)
}

async function LogaUser(email, senha){
  await signInWithEmailAndPassword(auth, email, senha)
  .then((user)=>{
      console.log(email, senha, user)
    })
    .catch((error)=>{
      if(error.code === 'auth/user-not-found'){
        alert('Usuário não encontrado')
      }
    })
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
    },
    Loga: (state, action)=>{
      LogaUser(action.payload.email, action.payload.senha)
      return{...state}
    },
    LogOut: (state)=>{
      LogOutUser();
      return{...state}
    }
  }
})

export default userSlice.reducer

export const{login, Cadastra, Loga, LogOut} = userSlice.actions
