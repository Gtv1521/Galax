import { useQuery } from '@tanstack/react-query'
import { verAlbum, verAllImages, verImagenesAlbum } from '../querys/albums.query'


export const albums = 'albums'
export const images = 'images'

export function useViewAlbum(id) {
    return useQuery({
        queryKey: [albums, id],
        queryFn: async () => await verAlbum(id),
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
