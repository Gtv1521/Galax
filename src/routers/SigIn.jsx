import React, { useState } from 'react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import env from 'react-dotenv'
import Cookie from 'universal-cookie'
import { ImSpinner9 } from 'react-icons/im'

const SigIn = () => {
  const [cambio, setCambio] = useState(true)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [user, setUser] = useState([])
  const [error, setError] = useState()
  const [spiner, setSpiner] = useState()

  const onSubmit = handleSubmit((data) => {
    setSpiner(true);
    axios.post(`${env.URL}/sigin`, {
      username: data.userName,
      password: data.password
    })
      .then(function (response) {
        setTimeout(() => {
          setSpiner(false)
          setUser(response.data);
        }, 2000)
      })
      .catch(function (error) {
        setTimeout(() => {
          setSpiner(false)
          setError(error.response.status);
        }, 2000)
      });
  })

  if (user?.token) {
    const cookie = new Cookie();
    cookie.set('id', user.id, { path: '/' });
    cookie.set('token', user.token, { path: '/' });
    window.location = '/dashboard';
  }
  return (
    <>
      <div className={'content'}>
        <div className={'description'}>
          <h1>HOlaaaa

          </h1>
        </div>
        <div className={'Login'}>
          {/* creamos el formulario de inicio de registro de usuario */}
          <div className={'form'} >
            <form method='' onSubmit={onSubmit}>
              <h1 className={'titleForm'}>Sig In</h1>
              <div className={'formGroup'}>
                <Input nombre={"UserName"} name={"userName"} type={"text"} dato={{
                  ...register("userName", {
                    required: {
                      value: true,
                      message: "El userName es requerido"
                    },
                    minLength: {
                      value: 2,
                      message: 'El nombre de usuario es minimo de 2 letras'
                    }
                  })
                }} />
                {errors.userName && <span className={'alert'}>{errors.userName.message}</span>}

                <Input nombre={"Contraseña"} name={"password"} type={cambio ? "password" : "text"} dato={{
                  ...register("password", {
                    required: {
                      value: true,
                      message: "La contraseña es requerida"
                    },
                    minLength: {
                      value: 8,
                      message: "La contraseña debe ser miniño 8 caracteres"
                    }
                  })
                }} />
                {cambio ?
                  (<FontAwesomeIcon icon={faEye} className={'icoForm'} onClick={() => setCambio(!cambio)} />) :
                  (<FontAwesomeIcon icon={faEyeSlash} className={'icoForm'} onClick={() => setCambio(!cambio)} />)
                }
                {errors.password && <span className={'alert'}>{errors.password.message}</span>}
              </div>
              <div>
                <input type='submit' className={'btnSubmit'} value={`Enviar`} name='btnEnviar' />
                {spiner && <ImSpinner9 className={'spinner'} />}
              </div>

              {error && <p className={'error'}>Usuario incorrecto</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SigIn 