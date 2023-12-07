import Input from './Input'
import '../styles/index.scss'
import { faCircleCheck, faCircleXmark, faForwardFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Select from './Select'
import { useUpdateFoto } from '../hooks/update'
import { ImSpinner9 } from 'react-icons/im'
import { useQueryClient } from '@tanstack/react-query'

const Editar = ({ id, images, url, setEditar }) => {

    const [image, setImage] = useState([])
    const [update, setUpdate] = useState(false)


    const { register, formState: { errors }, handleSubmit, reset, setValue, unregister, resetField, clearErrors } = useForm(
        {
            defaultValues: {
                titulo: images.name_img,
                album: images.album_id,
                image: ''
            }
        }
    )

    const mutacion = useUpdateFoto()

    register('image', {
        onChange: (e) => {
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    })

    const queryClient = useQueryClient()

    if (mutacion.isSuccess) {
        queryClient.invalidateQueries({ queryKey: ['images'] })
        queryClient.invalidateQueries({ queryKey: ['albums'] })
    }

    const onSubmit = handleSubmit(({ image, titulo, album }) => {
        mutacion.mutate({ id, image, titulo, album })
    })
    return (
        <>
            <div className={'formulario__update'}>
                <form className={'formulario__caja'} onSubmit={onSubmit}>
                    <FontAwesomeIcon className={'cerrar'} onClick={() => setEditar(false)} icon={faCircleXmark} />
                    <h3 className='titulo'>Actualizar</h3>
                    <Input type={'text'} nombre={'Titulo'}
                        dato={{
                            ...register("titulo", {
                                required: {
                                    value: true,
                                    message: "Se require un titulo"
                                }
                            })
                        }} />
                    {errors.titulo && <span className={'alert'}>{errors.titulo.message}</span>}

                    <Select nombre={'Album'} dato={{
                        ...register('album', {
                            required: {
                                value: true,
                                message: 'Se requiere un album'
                            }
                        })
                    }} />
                    {errors.album && <span className={'alert'}>{errors.album.message}</span>}

                    {
                        update &&
                        <Input type={'file'} nombre={'Image'}
                            dato={{
                                ...register("image", {
                                    required: {
                                        value: true,
                                        message: "Se require imagen"
                                    }
                                })
                            }}
                        />
                    }
                    {
                        update ? errors.image && <span className={'alert'}>{errors.image.message}</span> : ''
                    }


                    <div className='comparacion__imagenes'>
                        <div className='comparar'><img className='image__compara' alt='' src={url} /></div>

                        {
                            update &&
                            <FontAwesomeIcon className='ico' icon={faForwardFast} />

                        }
                        {
                            update &&
                            <div className='comparar'>
                                <img className='image__compara' alt=''
                                    src={image.length === 0 ? 'https://i.pinimg.com/564x/b6/ea/ea/b6eaeae82251c15f71297828a5b45192.jpg'
                                        :
                                        image} />
                            </div>
                        }


                    </div>
                    <button type='button' className='submit'
                        onClick={() => {
                            setUpdate(!update)
                            setImage([])
                            setValue("image", "")
                            resetField("image")
                            clearErrors("image")
                            unregister("image")
                        }}>{update ? 'No actualizar' : 'Actuazar foto'}
                    </button>
                    <button className='submit' type='submit' >Enviar</button>
                    {
                        mutacion.isPending && <span><ImSpinner9 className={'spinner'} /></span>
                    }
                    {
                        mutacion.isSuccess && <span><FontAwesomeIcon className={'iconoOk'} icon={faCircleCheck} /></span>
                    }
                    {
                        mutacion.isError && <span><FontAwesomeIcon icon={faCircleXmark} /></span>
                    }
                </form>
            </div>
        </>
    )
}

export default Editar