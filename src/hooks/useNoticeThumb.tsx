export default function useNoticeThumb(id:string){
    return process.env.NEXT_PUBLIC_SB_URL + '/storage/v1/object/public/blog/' + id + '.webp'
}