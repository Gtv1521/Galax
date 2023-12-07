import React from 'react'
import { useImagesAlbum } from '../hooks/gets';
import '../styles/Album.style.css'
import '../styles/Dashboard.style.scss'
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query'
import { useUpdateAlbum } from '../hooks/post';

const Newlbum = (dato) => {
    const { register, handleSubmit, formState: { errors }} = useForm(
        {
            defaultValues: {
                titulo: dato.nombre,
            }
        }
    )
    const mutacion = useUpdateAlbum()

    let id = dato.idAlbum
    const { data: images } = useImagesAlbum(id)

    function PrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const queryClient = useQueryClient()

    if (mutacion.isPending) {
        queryClient.invalidateQueries({ queryKey: ['albums'] })
    }

    const onSubmit = handleSubmit((datos) => {
            mutacion.mutate({
                id: id, titulo: datos.titulo
            })
            mutacion.isSuccess && dato.setEstado(false)
            dato.setEstado(false)
    })
    return (
        <>
            {
                images?.message ? 'fallo dato incorrecto' :
                images?.data.status === 200 ?
                    <div>
                        <img className={'imgAlbum'} src='https://i.pinimg.com/564x/b6/ea/ea/b6eaeae82251c15f71297828a5b45192.jpg' alt='' />
                    </div> :
                    images?.data.map(img =>
                        <img src={img.url_img}  key={img.id_img} alt='' className={'imgAlbum'} ></img>
                    )
            }
            {
                dato.estado ?
                    <div>
                        <form onSubmit={onSubmit}>
                            <input className={'input_form'} placeholder='Titulo' type="text" {
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
                                    },
                                    validate: (value) => {
                                        if (value === dato.nombre) {
                                            return 'Envie un titulo diferente';
                                        }
                                    }
                                })
                            } />
                            {errors.titulo && <span className={'alert_album'}>{errors.titulo.message}</span>}

                            <div className={'botones'}>
                                <button className={'submit'} onClick={() => dato.setEstado(false)}>Cerrar</button>
                                <button className={'submit'} type='submit'>Enviar</button>

                            </div>
                        </form>
                    </div>
                    :
                    <div className={'titulos'}> {PrimeraLetra(dato.nombre)}</div>
            }

        </>
    )
}

export default Newlbum