import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from './routers/Perfil'
import Inicio from './routers/Inicio'
import NotFound from './routers/NotFound'
import Nabvar from './components/Nabvar'
import Exit from './routers/Exit'
import Entrada from './routers/Entrada'

const App = () => {
    return (
        // creando enrutamiento de la pagina 
        <BrowserRouter>
        <Nabvar />
            <Routes>
                <Route path='/' exec element={<Inicio/>}>
                    <Route path='/inicio' element={<Entrada />} /> {/** Ruta de acceso al inicio de la app */}
                    <Route path='/perfil' element={<Perfil />} /> {/** Ruta de acceso al inicio de la app */}
                    <Route path='/exit' element={<Exit />} /> {/** Ruta de salida de session */}
                    <Route path='*' element={<NotFound />} /> {/** ruta de manejo de error */}
                </Route> {/** Ruta de acceso al index */} 
            </Routes>
        </BrowserRouter>
    )
}

export default App