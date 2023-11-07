import { useEffect, useState } from "react";
import Cookie from "universal-cookie"
import '../styles/Cierre.style.css'
import { ImSpinner9 } from 'react-icons/im'


const LogOut = () => {
  const cookies = new Cookie();
  const [message, setMessage] = useState('');

  cookies.remove('id', { path: '/' });
  useEffect(() =>{
    setMessage('Close  ');
    setTimeout(() => {
      window.location = '/inicio';
    }, 3000);
  }, []);

  return (
    <div>{ message !== '' && <p className={'mensajeCierre'}>{message}<ImSpinner9 className={'spinner'} /></p> }</div>
  )
}

export default LogOut