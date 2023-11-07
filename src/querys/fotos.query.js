import axios from "axios";
import env from "react-dotenv";
import { token } from "./albums.query";

export async function postNewAlbum (datos){
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

export async function verAllImages(id) {
    return await axios({
        method: 'get',
        url: `${env.URL}/verImagesId/${id}`, 
        headers: {
            Authorization: token
        }
    })
}
