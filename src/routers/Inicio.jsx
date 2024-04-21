import { useNavigate } from 'react-router-dom'
import '../styles/index.scss'



const Inicio = () => {

  const navigate = useNavigate();

  const login = () => {
      navigate('/login')
  }
  const sigin = () => {
      navigate('/sigin')
  }

  return (

    <div className={'content'}>
      <div className="caja">
        <div className="botonInit registro" onClick={login}>Log In</div>
        <div className="botonInit inicio" onClick={sigin}>Sig In</div>
      </div>
    </div>
  )
}

export default Inicio