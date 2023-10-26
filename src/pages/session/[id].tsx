import { SessionTableAtom } from "@/atoms/SessionTableAtom"
import ControllerCard from "@/components/Session/ControllerCard"
import QueueCard from "@/components/Session/QueueCard"
import { supabase } from "@/lib/supabaseInit"
import { Center } from "@/styles/center"
import router, { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilState } from "recoil"

export default function InsideSession(){
    const CenterStyle = Center()
    const router = useRouter()
    const [SessionData, setSessionData] = useRecoilState(SessionTableAtom)

    const chan = supabase.channel(router.query.id as string)

    chan.on(
        'postgres_changes',
        {
            event: 'UPDATE',
            schema: 'public',
            table: 'session'
        },
        payload => {
            setSessionData(payload.new as SessionTableType)
        }
    )
    .subscribe()

    useEffect(()=>{
        if(router.isReady){
            supabase
                .from('session')
                .select('*')
                .eq('id', router.query.id)
                .single()
                .then((d)=>{
                    setSessionData(d.data as SessionTableType)
                })
        }
    },[router.isReady])

    return(
        <div className={CenterStyle.flex}>
            <div style={{width:'900px'}}>
                <ControllerCard/>
                <QueueCard/>
            </div>
        </div>
    )
}