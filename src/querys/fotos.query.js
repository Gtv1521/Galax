import axios from "axios";
import env from "react-dotenv";
import { token } from "./albums.query";

export async function postNewAlbum(datos) {
    return await axios({
        method: 'post',
        url: `${env.URL}/albumNew/${datos.id}`,
        headers: {
            Authorization: token
        },
        data: {
            nombre: datos.album
        }
    })
}

export async function postNewFoto(datos) {
    return await axios({
        method: 'post',
        url: `${env.URL}/addImage/${datos.id}`,
        headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data"
        },
        data: {
            name_img: datos.titulo,
            album_id: datos.album,
            image: datos.image
        }
    })
}

export async function postUpdateFoto({ id, image, titulo, album }) {
    console.log(id, image, titulo, album)

    if (image === undefined || image.length === 0) {
        return await axios({
            method: 'post',
            url: `${env.URL}/updateImage/${id}`,
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            },
            data: {
                name_img: titulo,
                album_id: album,
            }
        })
    }

    if (image !== undefined || image.length > 0) {
        return await axios({
            method: 'post',
            url: `${env.URL}/updateImage/${id}`,
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data"
            },
            data: {
                name_img: titulo,
                album_id: album,
                image: image[0]
            }
        })
    }
}

