import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import Cookies from 'universal-cookie'
import { NewFoto } from '../hooks/post.js'
import { useViewAlbum } from '../hooks/gets.js'

const FormFoto = () => {
    const cookie = new Cookies()

    const { register, handleSubmit, formState: { errors } } = useForm()


    let idUsuario = cookie.get('id')

    const { data: dataAlbum } = useViewAlbum(idUsuario)

    const datos = dataAlbum.data
    function PrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const onSubmit = handleSubmit((datos) => {
        // NewFoto(datos)
        console.log(datos)
    })
    return (
        <div>
            <div className={'formulario'}>
                <form onSubmit={onSubmit}>
                    <div className={'formulario__container'}>
                        <div className={'caja_album'}>
                            <label for="album" className={'select_label'}>Album:</label>
                            <select className={'select_album'} {...register('album', {
                                required: true,
                                message: 'Select a album'
                            })}>
                                {datos.map(album =>
                                    <option value={album.id_album}>{PrimeraLetra(album.nombre_album)}</option>
                                )}

                            </select>
                        </div>

                        <Input nombre={"Titulo"} type={"text"} dato={{
                            ...register("titulo", {
                                required: {
                                    value: true,
                                    message: "Titulo es requerido"
                                },
                                minLength: {
                                    value: 2,
                                    message: "El titulo debe tener minimo 2 letras"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "El titulo debe tener maximo 30 letras"
                                },
                                pattern: {
                                    value: /[a-zA-Z._%+-]/,
                                    // value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2-4}$/,
                                    message: 'Nombre no valido no debe incluir numeros'
                                }
                            })
                        }} />
                        {errors.titulo && <span className={'alert'}>{errors.titulo.message}</span>}


                        <Input nombre={"Imagen"} type={"file"} dato={{
                            ...register("image")
                        }} />

                        <div className={'boton_foto'}>
                            <input type='submit' className={'btnSubmit'} value='Enviar' name='btnEnviar' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormFoto