import axios from "axios";
import env from "react-dotenv";
import Cookies from "universal-cookie";

const cookie = new Cookies();
export const token = cookie.get('token');

// muestra todos los albums 
export async function verAlbum(id) {
    return await axios.get(`${env.URL}/albums/${id}`, {
        headers: {
            Authorization: token
        }
    })
}
// muestra un album albums 
export async function verAlbumID(id) {
    return await axios.get(`${env.URL}/album/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

// muestra las todas las imagenes de un usuario
export async function verImagenesAlbum(album_id) {
    return await axios.get(`${env.URL}/verImagenesAlbum/${album_id}`, {
        headers: {
            Authorization: token
        }
    })
}

export async function verAllImages({id, ruta}) {
    return await axios.get(`${env.URL}/${ruta}/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

export async function putUpdateAlbum(datos) {
    return await axios({
        method: 'put',
        url: `${env.URL}/updateAlbum/${datos.id}`,
        headers: {
            Authorization: token
        },
        data: {
            nombre: datos.titulo
        }
    })
}

export async function deleteAlbum(id, ruta) {
    return await axios({
        method: 'delete',
        url: `${env.URL}/${ruta}/${id}`,
        headers: {
            Authorization: token
        }
    })
}

