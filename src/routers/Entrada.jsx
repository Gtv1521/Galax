import { useEffect, useState } from 'react';
import NavInicio from '../components/NavInicio';
import NavUser from '../components/NavUser';
import '../styles/Inicio.style.css';
import Cookie from 'universal-cookie';

const Entrada = () => {
  const cookies = new Cookie();
  const [user, setUser] = useState(true);

  useEffect(() => {
    if (cookies?.get('id')){
      setUser(true);
    }else{
      setUser(false);
    }
  }, []);


return (
  <>
    <div className={'Navbar'}>
      <div className={'Nav'}>
        <div className={'Logo'}><img src="" alt="" />Logo </div>
        <ul className={'Items'}>
          {user ? (
            <NavUser />
          ) : (
            <NavInicio />
          )}
        </ul>
      </div>
    </div>
  </>
)
}


export default Entrada