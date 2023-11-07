import React from 'react'
import { useState } from 'react';
import Cookies from 'universal-cookie';
import '../styles/Dashboard.style.css'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark, faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Albums from '../components/Albums';
import FormFoto from '../components/FormFoto';
import { images, useViewImages } from '../hooks/gets';
import { ImSpinner9 } from 'react-icons/im';


const Dashboar = () => {

  const cookie = new Cookies();

  let usuario = cookie.get('id');
  let token = cookie.get('token');

  if (!usuario || !token) {
    window.location = '/'
  }

  const [flecha, setFlecha] = useState(false)
  const [nuevo, setNuevo] = useState(false)


  const { data, isPending } = useViewImages(usuario);

  const imagenes = data

  return (
    <>
      <div className='contenedor'>
        {
          flecha && <Albums images={imagenes} />

        }
        <div className={flecha ? 'contenedor__imagenes' : 'ampliar'}>
          <div className={'contenedor_titulo'}>

            {flecha ? <FontAwesomeIcon onClick={() => setFlecha(false)} className={'icono'} icon={faCircleChevronLeft} />
              : <FontAwesomeIcon className={'icono'} onClick={() => setFlecha(true)} icon={faCircleChevronRight} />}

            <h1 className={'titulo'}>Todo</h1>
            <FontAwesomeIcon className={'icono_add'} icon={faMagnifyingGlass} />
            <FontAwesomeIcon onClick={() => setNuevo(true)} className={'icono_add'} icon={faSquarePlus} />
          </div>
          {
            isPending ? <span><ImSpinner9 className={'spinner'} /></span> : 
            <div className={flecha ? 'imagenes' : 'ampliado'}>
            {
              imagenes.data.map((image) =>
                <div key={image.id_img}>
                  <img className={'image'} src={image.url_img} />
                </div>
              )
            }
          </div>}
        </div>
      </div>
      {
        nuevo &&
        <div className={'mostrar_add_imagen'}>
          <div className={'contenedor_titulo'}>
            <h1 className={'titulo'}>Agregar</h1>
            <FontAwesomeIcon className={'cerrar'} onClick={() => setNuevo(false)} icon={faCircleXmark} />
          </div>
          <FormFoto />
        </div>
      }
      <Footer />
    </>
  )
}

export default Dashboar  