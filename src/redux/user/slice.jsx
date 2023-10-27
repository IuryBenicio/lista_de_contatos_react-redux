import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{
    email: '',
    logado: false
  }
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
    }
  }
})

export default userSlice.reducer

export const{login} = userSlice.actions
