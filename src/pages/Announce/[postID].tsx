import { useRouter } from "next/router"

export default function PostBody(){
    const route = useRouter();

    return(
        <div>{route.query.postID}</div>
    )
}