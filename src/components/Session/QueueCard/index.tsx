import { Card, Title2 } from "@fluentui/react-components";
import { QueueCardStyle } from "./style"
import QueueAddDialog from "../QueueAddDialog"
import { useRecoilState } from "recoil";
import { PlaylistQueue } from "@/atoms/PlaylistQueue";
import VideoThumb from "../VideoThumb";
import { supabase } from "@/lib/supabaseInit";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SessionTableAtom } from "@/atoms/SessionTableAtom";

export default function QueueCard(){
    const router = useRouter()
    const style = QueueCardStyle()
    const [SessionData, setSessionData] = useRecoilState(SessionTableAtom)

    return(
        <Card>
            <div className={style.e2e}>
                <Title2>재생 대기열</Title2>
                <QueueAddDialog/>
            </div>
            {SessionData?.queue?.map((d)=>{
                return <VideoThumb data={d} key={d.id.videoId}/>
            })}
        </Card>
    )
}