import QueueCard from "@/components/Session/QueueCard"
import VideoThumb from "@/components/Session/VideoThumb"
import { supabase } from "@/lib/supabaseInit"
import { Center } from "@/styles/center"
import { Card, Input } from "@fluentui/react-components"
import { RealtimeChannel } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function InsideSession(){
    const router = useRouter()
    const CenterStyle = Center();
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
            LiveChannel?.on('broadcast', {event:'msg'},payload=>{
                console.log(payload)
            })
        }
    },[SessionID])

    return(
        <div className={CenterStyle.flex}>
            <div style={{width:'900px'}}>
                {SessionID}
                <QueueCard/>
            </div>
        </div>
    )
}
//TODO
//- 유튜브 검색 로직
//- 큐 전송 realtime 관련 코드
//- 사용자 목록 realtime 로직
//- /join 디렉토리
//- Owner 구분 로직