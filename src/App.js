import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from './routers/Perfil'
import Inicio from './routers/Inicio'
import NotFound from './routers/NotFound'
import Nabvar from './components/Nabvar'
import Exit from './routers/Exit'
import SigIn from './routers/SigIn'
import LogIn from './routers/LogIn'

const App = () => {
    return (
        // creando enrutamiento de la pagina 
        <BrowserRouter>
        <Nabvar />
            <Routes>
                <Route path='/' index element={<Inicio/>} /> {/** Ruta de acceso al index */} 
                <Route path='/sigin' element={<SigIn/>} /> {/** Ruta de acceso al index */} 
                <Route path='/login' element={<LogIn/>} /> {/** Ruta de acceso al index */} 
                <Route path='/perfil' element={<Perfil />} /> {/** Ruta de acceso al inicio de la app */}
                <Route path='/exit' element={<Exit />} /> {/** Ruta de salida de session */}
                <Route path='*' element={<NotFound />} /> {/** ruta de manejo de error */}
            </Routes>
        </BrowserRouter>
    )
}

export default App