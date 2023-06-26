interface useNoticeThumbType{
    id: string;
}

export default function useNoticeThumb(id:useNoticeThumbType){
    return process.env.NEXT_PUBLIC_SB_URL + '/storage/v1/object/public/blog/' + id + '.webp'
}