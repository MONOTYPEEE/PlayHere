import VideoThumb from "@/components/Session/VideoThumb";
import { Card, Title2 } from "@fluentui/react-components";

interface NowPlayingCardType{
    data: YouTubeVideoItem | undefined
}

export default function NowPlayingCard({data}: NowPlayingCardType){
    return(
        <Card>
            <Title2>지금 재생 중</Title2>
            <VideoThumb data={data}/>
        </Card>
    )
}