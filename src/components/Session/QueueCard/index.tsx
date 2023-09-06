import { Card, Title2 } from "@fluentui/react-components";
import { QueueCardStyle } from "./style"
import QueueAddDialog from "../QueueAddDialog"
import { useRecoilState } from "recoil";
import { PlaylistQueue } from "@/atoms/PlaylistQueue";
import VideoThumb from "../VideoThumb";
import { supabase } from "@/lib/supabaseInit";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function QueueCard(){
    const router = useRouter()
    const style = QueueCardStyle()
    const [Queue, setQueue] = useRecoilState(PlaylistQueue)

    const chan = supabase.channel(router.query.id as string, {config:{broadcast:{self: true}}})
    
    chan.on(
        'broadcast',
        { event: 'addtoQueue' },
        payload => {
            setQueue([...Queue, payload.payload])
        }
    )

    return(
        <Card>
            <div className={style.e2e}>
                <Title2>재생 대기열</Title2>
                <QueueAddDialog/>
            </div>
            {Queue.map((d)=>{
                return <VideoThumb data={d} key={d.id.videoId}/>
            })}
        </Card>
    )
}