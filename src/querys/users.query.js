import axios  from "axios";
import env from "react-dotenv";
import { token } from "./albums.query";


export async function verUsuario (id) {
    return await axios.get(`${env.URL}/user/${id}`, {
        headers: {
            Authorization: token
        }
    })
}