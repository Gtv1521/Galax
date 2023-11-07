import { useQuery } from '@tanstack/react-query'
import { verAlbum } from '../querys/albums.query'
import { verAllImages } from '../querys/fotos.query'

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