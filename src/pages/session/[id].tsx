import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function InsideSession(){
    const router = useRouter();
    const [SessionID,setSessionID] = useState('');

    useEffect(()=>{
        if(router.isReady){
            setSessionID(router.query.id as string)
        }
    },[router.isReady])

    return(
        <div>
            {SessionID}
        </div>
    )
}