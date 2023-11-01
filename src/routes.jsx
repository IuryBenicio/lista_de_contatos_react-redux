import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import RegisterPage from './pages/Register'
import Header from "./components/Header"
import LoginPage from './pages/Logar'
import Private from './Routes/Private'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <RegisterPage/> } />
                <Route path='/Home' element={ <Private>  <Home/> </Private> } />
                <Route path='/Login' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
