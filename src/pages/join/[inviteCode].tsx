import ErrorAlert from "@/components/join/ErrorAlert"
import { supabase } from "@/util/supabaseInit"
import { Center } from "@/styles/center"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import JoinCard from "@/components/join/joinCard"
import NowPlayingCard from "@/components/join/NowPlayingCard"

export default function InviteCode(){
    const router = useRouter()
    const centerStyle = Center()
    const [IsErrorOpen, setIsErrorOpen] = useState<boolean>(false)
    const [SessionInfo, setSessionInfo] = useState<SessionTableType>()

    useEffect(()=>{
        if(router.isReady){
            supabase
                .from('session')
                .select('*')
                .eq('inviteCode', router.query.inviteCode)
                .single()
                .then(({data, error})=>{
                    if(data === null){
                        setIsErrorOpen(true)
                    }
                    else{
                        setSessionInfo(data as SessionTableType)
                    }
                })
        }
    },[router.isReady])

    return(
        <div className={centerStyle.flex} style={{gap: '16px', flexDirection: 'column'}}>
            {SessionInfo && !IsErrorOpen &&
                <div>
                    <JoinCard sessionID={SessionInfo?.id}/>
                    <NowPlayingCard data={SessionInfo.nowPlaying ?? undefined}/>
                </div>
            }
            <ErrorAlert isOpen={IsErrorOpen}/>
        </div>
    )
}
