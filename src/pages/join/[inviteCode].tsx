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
    const [SessionInfo, setSessionInfo] = useState<YouTubeVideoItem>()

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
                        setSessionInfo(data.nowPlaying)
                    }
                })
        }
    },[router.isReady])

    return(
        <div className={centerStyle.flex} style={{gap: '16px', flexDirection: 'column'}}>
            {!IsErrorOpen &&
                <div>
                    <JoinCard/>
                    <NowPlayingCard data={SessionInfo}/>
                </div>
            }
            <ErrorAlert isOpen={IsErrorOpen}/>
        </div>
    )
}
