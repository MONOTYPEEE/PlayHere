import { supabase } from "@/lib/supabaseInit"
import { Input } from "@fluentui/react-components"
import { RealtimeChannel } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function InsideSession(){
    const router = useRouter()
    const [SessionID,setSessionID] = useState<string>('')
    const [LiveChannel, setLiveChannel] = useState<RealtimeChannel>()
    const [Searchbar, setSearchbar] = useState<string>('')

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
                console.log(payload)
            })
        }
    },[SessionID])

    function sendmsg(){
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${Searchbar}&type=video&key=${process.env.NEXT_PUBLIC_GOOGLE}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
    }

    return(
        <div>
            {SessionID}
            <Input value={Searchbar} onChange={(e)=>setSearchbar(e.target.value)}/>
            <button onClick={sendmsg}>Search</button>
        </div>
    )
}
//TODO
//- 유튜브 검색 로직
//- 큐 전송 realtime 관련 코드
//- 사용자 목록 realtime 로직
//- /join 디렉토리
//- Owner 구분 로직