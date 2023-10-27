import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import RegisterPage from './pages/Register'
import Header from "./components/Header"

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <RegisterPage/> } />
                <Route path='/Home' element={ <Home/> } />
                <Route path='/Register' element={ <RegisterPage/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
