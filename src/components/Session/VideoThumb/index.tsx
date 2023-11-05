import { Body1, Image, Subtitle1, Subtitle2 } from "@fluentui/react-components"
import { VideoThumbStyle } from "./style"

interface videoThumbProps {
    data: YouTubeVideoItem | undefined | null
}

export default function VideoThumb({data}:videoThumbProps){
    const style = VideoThumbStyle()

    if(data === undefined || data === null){
        return(
            <div className={style.main}>
                <div className={style.thumbnailDummy}/>
                <div className={style.vertical}>
                    <Subtitle1 className={style.text}>미디어 없음</Subtitle1>
                    <Body1>아티스트</Body1>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={style.main}>
                <Image src={data?.snippet.thumbnails.medium.url} width={160} height={90} shadow shape="rounded"/>
                <div className={style.vertical}>
                    <Subtitle1 className={style.text}>{data?.snippet.title}</Subtitle1>
                    <Body1>{data?.snippet.channelTitle}</Body1>
                </div>
            </div>
        )
    }
}