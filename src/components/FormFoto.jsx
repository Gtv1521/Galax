import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import Cookies from 'universal-cookie'
import { useNewFoto } from '../hooks/post.js'
import { ImSpinner9 } from 'react-icons/im'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useQueryClient } from '@tanstack/react-query'
import Select from './Select.jsx'

const FormFoto = () => {
    const cookie = new Cookies()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    let idUsuario = cookie.get('id')

    const mutacion = useNewFoto()
    const queryClient = useQueryClient()

    if (mutacion.isPending) {
        queryClient.invalidateQueries({ queryKey: ['images'] })
        queryClient.invalidateQueries({ queryKey: ['albums'] })
    }


    const onSubmit = handleSubmit((datos) => {
        mutacion.mutate({ id: idUsuario, album: datos.album, titulo: datos.titulo, image: datos.image[0] })
        reset()
    })


    return (
        <div>
            <div className={'formulario'}>
                <form onSubmit={onSubmit}>
                    <div className={'formulario__container'}>
                        <div className={'caja_album'}>
                            <Select nombre={'Album'} dato={{
                                ...register('album', {
                                    required: {
                                        value: true,
                                        message: 'Se requiere un album'
                                    }
                                })
                            }} />
                            {errors.album && <span className={'alert'}>{errors.album.message}</span>}

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
                            ...register("image",{
                                required: {
                                    value: true,
                                    message: "Se require imagen"
                                }
                            })
                        }} />
                        {errors.image && <span className={'alert'}>{errors.image.message}</span>}


                        <div className={'boton_foto'}>
                            <input type='submit' className={'btnSubmit'} value='Enviar' name='btnEnviar' />
                            {
                                mutacion.isPending && <span><ImSpinner9 className={'spinner'} /></span>
                            }
                            {
                                mutacion.isSuccess && <span><FontAwesomeIcon className={'iconoOk'} icon={faCircleCheck} /></span>
                            }
                            {
                                mutacion.isError && <span><FontAwesomeIcon icon={faCircleXmark} /></span>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormFoto