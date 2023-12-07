// sources
import React from 'react'

// components
import '../styles/LogIn.style.css'

const Input = ({ type, name, nombre, dato, setImage }) => {
  return (
    <>
      <div className={'inputGroup'}>
        <label htmlFor={name} className={'label'}>{nombre}:</label>
        <div className={'inputduo'}>
          <input className={'input'} name={name} {...dato} type={type} placeholder={nombre} />
        </div>
      </div>
    </>
  )
}

export default Input