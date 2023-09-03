import { Card, Title2 } from "@fluentui/react-components";
import { QueueCardStyle } from "./style"
import QueueAddDialog from "../QueueAddDialog"
import { useRecoilState } from "recoil";
import { PlaylistQueue } from "@/atoms/PlaylistQueue";
import VideoThumb from "../VideoThumb";

export default function QueueCard(){
    const style = QueueCardStyle()
    const [Queue,setQueue] = useRecoilState(PlaylistQueue)

    

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