import { useState } from 'react'
import '../styles/Nabvar.style.css'
import NavInicio from './NavInicio.jsx'
import NavUser from './NavUser.jsx'

// import env from 'react-dotenv'
// import axios from "axios"


const Nabvar = () => {
    const [session, setSession] = useState(false);
    return (
        <div className={'Navbar'}>
            <div className={'Nav'}>
                <div className={'Logo'}><img src="" alt="" />Logo </div>
                <ul className={'Items'}>
                    {session ? (
                        <NavUser />
                    ) : (
                        <NavInicio />
                    )}
                </ul>
            </div>

        </div>
    )
}

export default Nabvar