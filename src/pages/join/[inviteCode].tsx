import CardStack from "@/components/join/CardStack"
import ErrorAlert from "@/components/join/ErrorAlert"
import { supabase } from "@/lib/supabaseInit"
import { Center } from "@/styles/center"
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
            {SessionInfo && <CardStack isOpen={IsErrorOpen} nowPlaying={SessionInfo}/>}
            <ErrorAlert isOpen={IsErrorOpen}/>
        </div>
    )
}
