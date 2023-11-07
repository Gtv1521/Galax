import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/Dashboard.style.css'
import axios from 'axios'
import env from 'react-dotenv'
import Cookies from 'universal-cookie'
import ContenedorAlbums from './ContenedorAlbums'
import { NewAlbum, useNewAlbum } from '../hooks/post'
import { useQueryClient } from '@tanstack/react-query'


const FormAlbums = (props) => {
    // uso librerias
    const cookie = new Cookies()
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            defaultValues: {
                album: '',
            }
        }
    )

    // uso de cookie
    const idUsuario = cookie.get('id')
    const token = cookie.get('token')

    const queryClient = useQueryClient()
    const mutacion = useNewAlbum()
    if (mutacion.isPending){
            queryClient.invalidateQueries({ queryKey: ['albums'] })
    }

    const onSubmit = handleSubmit((datos) => {
        mutacion.mutate({id: idUsuario, album: datos.album})
        reset()
    })
    return (
        <div>
            <div className={'formulario'}>
                <form onSubmit={onSubmit}>
                    <div className={'formulario__container'} id='form'>
                        <input className='input_form' type={"text"} placeholder='Album' {
                            ...register("album", {
                                required: {
                                    value: true,
                                    message: "Escriba un album"
                                },
                                validate: async (value) => {
                                    const valorbase = await axios.get(`${env.URL}/albums/${idUsuario}`, {
                                        headers: {
                                            "Authorization": token
                                        }
                                    })

                                    let Albums = valorbase.data
                                    for (let i = 0; i < Albums.length; i++) {
                                        if (Albums[i].nombre_album === value) {
                                            return 'Album ya existe'
                                        }
                                    }
                                }
                            })
                        } />
                        <button type='submit' className={'icono_album'} name='btnEnviar'><FontAwesomeIcon icon={faAnglesRight} /></button>
                    </div>
                    {errors.album && <span className={'alert'}>{errors.album.message}</span>}
                </form>
            </div>
        </div>
    )
}

export default FormAlbums