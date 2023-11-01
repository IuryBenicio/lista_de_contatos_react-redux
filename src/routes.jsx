import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import RegisterPage from './pages/Register'
import Header from "./components/Header"
import LoginPage from './pages/Logar'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <RegisterPage/> } />
                <Route path='/Home' element={ <Home/> } />
                <Route path='/Login' element={ <LoginPage/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
