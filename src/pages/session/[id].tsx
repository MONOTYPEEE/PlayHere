import { supabase } from "@/lib/supabaseInit"
import { RealtimeChannel } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function InsideSession(){
    const router = useRouter()
    const [SessionID,setSessionID] = useState<string>('')
    const [LiveChannel, setLiveChannel] = useState<RealtimeChannel>()

    useEffect(()=>{
        if(router.isReady){
            setSessionID(router.query.id as string)
        }
    },[router.isReady])
    useEffect(()=>{
        if(SessionID){
            setLiveChannel(
                supabase.channel(SessionID).subscribe()
            )
            console.log(LiveChannel)
            LiveChannel?.on('broadcast', {event:'msg'},payload=>{
                console.log(payload.payload.payload)
            })
        }
    },[SessionID])

    function sendmsg(){
        LiveChannel?.send({
            type: 'broadcast',
            payload: 'MeSsAgE',
            event: 'msg',
        })
    }

    return(
        <div>
            {SessionID}
            <button onClick={sendmsg}>Send</button>
        </div>
    )
}