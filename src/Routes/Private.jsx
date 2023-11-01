/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebaseconnection"
import { Navigate } from "react-router-dom"

export default function Private({children}){
  const[carregando, setCarregando] = useState(true)
  const[logado, setLogado] = useState(false)

  useEffect(()=>{
    async function checkLogin(){
      // eslint-disable-next-line no-unused-vars
      const unsub = onAuthStateChanged(auth, (user)=>{
        if(user){
          const userData = {
            uid: user.uid,
            email: user.email,
          }
          localStorage.setItem('@detailUser', JSON.stringify(userData))

          setCarregando(false)
          setLogado(true)

        }else{
          setCarregando(false)
          setLogado(false)
        }
      })
    }
    checkLogin()
  },[])

  if(carregando){
    return(
      <>
      </>
    )
  }if(!logado){
    return <Navigate to='/Login'/>
  }

  return children
}
