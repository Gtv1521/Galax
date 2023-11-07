import axios from "axios";
import env from "react-dotenv";
import Cookies from "universal-cookie";

const cookie = new Cookies();
export const token = cookie.get('token');

export async function  verAlbum(id) {
    return await axios.get(`${env.URL}/albums/${id}`, {
        headers: {
            Authorization: token
        }
    })
}