import ErrorAlert from "@/components/join/ErrorAlert"
import NowPlayingCard from "@/components/join/NowPlayingCard"
import JoinCard from "@/components/join/joinCard"
import { supabase } from "@/lib/supabaseInit"
import { Center } from "@/styles/center"
import { Dialog, DialogSurface, DialogBody, DialogTitle, DialogContent, DialogActions, DialogTrigger, Button } from "@fluentui/react-components"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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
                        console.log(data.nowPlaying)
                        setSessionInfo(data.nowPlaying)
                    }
                })
        }
    },[router.isReady])

    return(
        <div className={centerStyle.flex} style={{gap: '16px', flexDirection: 'column'}}>
            {!IsErrorOpen && 
                <>
                    <JoinCard/>
                    <NowPlayingCard data={SessionInfo}/>
                </>
            }
            <ErrorAlert isOpen={IsErrorOpen}/>
        </div>
    )
}
