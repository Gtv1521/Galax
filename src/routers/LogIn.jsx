// sources
import React, { useState } from 'react'

// components
import Input from '../components/Input'
import '../styles/LogIn.style.css'
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBedPulse, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import env from 'react-dotenv'

const LogIn = () => {

  const [cambio, setCambio] = useState(true)
  const [confirma, setConfirma] = useState(true)
  const [ver, setVer] = useState(true)
  const [correo, setCorreo] = useState(true)
  const [datos, setDatos] = useState([''])
  const { register, watch, handleSubmit, formState: { errors } } = useForm()

  const result = (value) => {
    return axios.get(`${env.URL}/username/${value}`)
      .then((response) => {
        if (response.data === "") {
          setVer(true)
        } else {
          setVer(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const resultCorreo = (value) => {
    return axios.get(`${env.URL}/email/${value}`)
      .then((response) => {
        if (response.data === "") {
          setCorreo(true)
        } else {
          setCorreo(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onSubmit = handleSubmit((data) => {
    console.log(data.nombre, data.email, data.userName, data.password)
    axios({
      method: 'post',
      url: `${env.URL}/login`,
      body: {
        nombre: data.nombre,
        email: data.email,
        username: data.username,
        password: data.password
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  })
  return (
    <div className={'content'}>
      <div className={'description'}>
        <h1>HOlaaaa

        </h1>
      </div>
      <div className={'Login'}>
        {/* creamos el formulario de inicio de registro de usuario */}
        <div className={'form'} >
          <form onSubmit={onSubmit}>
            <h1 className={'titleForm'}>Log In</h1>
            <div className={'formGroup'}>
              <Input nombre={"Nombre"} name={"nombre"} type={"text"} dato={{
                ...register("nombre", {
                  required: {
                    value: true,
                    message: "Nombre es requerido"
                  },
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener minimo 2 letras"
                  },
                  maxLength: {
                    value: 30,
                    message: "El nombre debe tener maximo 30 letras"
                  },
                  pattern: {
                    value: /[a-zA-Z._%+-]/,
                    // value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2-4}$/,
                    message: 'Nombre no valido no debe incluir numeros'
                  }
                })
              }} />
              {errors.nombre && <span className={'alert'}>{errors.nombre.message}</span>}

              <Input nombre={"Email"} name={"email"} type={"text"} dato={{
                ...register("email", {
                  required: {
                    value: true,
                    message: "Email es requerido"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/,
                    message: 'Email no valido'
                  },
                  validate: (value) => {
                    resultCorreo(value)
                    if (correo === false) {
                      return "Correo ya existe"
                    }
                  }
                })
              }} />
              {errors.email && <span className={'alert'}>{errors.email.message}</span>}

              <Input nombre={"UserName"} name={"userName"} type={"text"} dato={{
                ...register("userName", {
                  required: {
                    value: true,
                    message: "El userName es requerido"
                  },
                  pattern: {
                    value: 8,
                    message: 'La contraseña es de minimo 8 caracteres'
                  },
                  validate: (value) => {
                    result(value)
                    if (ver === false) {
                      return "Usuario ya existe"
                    }
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
                  pattern: {
                    value: 8,
                    message: 'La contraseña es de minimo 8 caracteres'
                  }
                })
              }} />
              {cambio ?
                (<span className={'icoForm'} onClick={() => setCambio(!cambio)}><FontAwesomeIcon icon={faEye} /></span>) :
                (<span className={'icoForm'} onClick={() => setCambio(!cambio)} ><FontAwesomeIcon icon={faEyeSlash} /></span>)
              }
              {errors.password && <span className={'alert'}>{errors.password.message}</span>}

              <Input nombre={"Confirmar Contraseña"} name={"password"} type={confirma ? "password" : "text"} dato={{
                ...register("passwordConfir", {
                  required: {
                    value: true,
                    message: "La confirmacion es requerida"
                  },
                  pattern: {
                    value: 8,
                    message: 'La contraseña es de minimo 8 caracteres'
                  },
                  validate: (value) => {
                    if (value !== watch("password")) {
                      return "contraseñas diferentes"
                    }
                  }

                })
              }} />
              {confirma ?
                (<FontAwesomeIcon icon={faEye} className={'icoForm'} onClick={() => setConfirma(!confirma)} />) :
                (<FontAwesomeIcon icon={faEyeSlash} className={'icoForm'} onClick={() => setConfirma(!confirma)} />)
              }
              {errors.passwordConfir && <p className={'alert'}>{errors.passwordConfir.message}</p>}

            </div>
            <input type='submit' className={'btnSubmit'} value='Enviar' name='btnEnviar' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn