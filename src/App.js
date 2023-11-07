import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from './routers/Perfil'
import Inicio from './routers/Inicio'
import NotFound from './routers/NotFound'
// import Nabvar from './components/Nabvar'
import SigIn from './routers/SigIn'
import LogIn from './routers/LogIn'
import Entrada from './routers/Entrada'
import LogOut from './routers/LogOut'
import Dashboar from './routers/Dashboar'


const App = () => {
    return (
        // creando enrutamiento de la pagina 
        <BrowserRouter>
        <Entrada/>
            <Routes>
                <Route path='/' element={<Inicio/>} /> {/** Ruta de acceso al index */} 
                <Route path='/sigin' element={<SigIn/>} /> {/** Ruta de acceso al index */} 
                <Route path='/inicio' index element={<Inicio/>} /> {/** Ruta de acceso al index */} 
                <Route path='/dashboard' element={<Dashboar/>} /> {/** Ruta de acceso al index */} 
                <Route path='/login' element={<LogIn/>} /> {/** Ruta de acceso al index */} 
                <Route path='/perfil' element={<Perfil />} /> {/** Ruta de acceso al inicio de la app */}
                <Route path='/logout' element={<LogOut />} /> {/** Ruta de salida de session */}
                <Route path='*' element={<NotFound />} /> {/** ruta de manejo de error */}
            </Routes>
        </BrowserRouter>
    )
}

export default App