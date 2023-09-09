import VideoThumb from "@/components/Session/VideoThumb";
import { Card, Title2 } from "@fluentui/react-components";

export default function NowPlayingCard(){
    return(
        <Card>
            <Title2>지금 재생 중</Title2>
            <VideoThumb data={dummie}/>
        </Card>
    )
}

const dummie ={
    "kind": "youtube#searchResult",
    "etag": "Nm90bv5pN3wDa5Xf52lAfY4-oyY",
    "id": {
        "kind": "youtube#video",
        "videoId": "HabKzFN40ao"
    },
    "snippet": {
        "publishedAt": "2023-01-31T15:03:22Z",
        "channelId": "UCg5_QN80zsiMQR1YZa2HuXw",
        "title": "Money Breath",
        "description": "Provided to YouTube by YG PLUS Money Breath · QM 돈숨 ℗ VMC Released on: 2020-12-12 Lyricist: QM Composer: Fredi Casso ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/HabKzFN40ao/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/HabKzFN40ao/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/HabKzFN40ao/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "QM - Topic",
        "liveBroadcastContent": "none",
        "publishTime": "2023-01-31T15:03:22Z"
    }
}