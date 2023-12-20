import { useQuery } from '@tanstack/react-query'
import { verAlbum, verAlbumID, verAllImages, verImagenesAlbum } from '../querys/albums.query'
import { verUsuario } from '../querys/users.query'


export const albums = 'albums'
export const images = 'images'
export const user = 'user'

// muestra todos los albums
export function useViewAlbum(id) {
    return useQuery({
        queryKey: [albums, id],
        queryFn: async () => await verAlbum(id),
    })
}
// muestra un album
export function useVistaAlbumID(id) {
    return useQuery({
        queryKey: [albums, id],
        queryFn: async () => await verAlbumID(id),
    })
}

export function useViewImages(id) {
    return useQuery({
        queryKey: [images, id],
        queryFn: async () => await verAllImages(id),
    })
}

export function useImagesAlbum(album_id) {
    return useQuery({
        queryKey: [albums, album_id],
        queryFn: async () => await verImagenesAlbum(album_id),
    })
}

export function useBuscaNombre(id) {
    return useQuery({
        queryKey: [user, id],
        queryFn: async () => await verUsuario(id),
    })
}


