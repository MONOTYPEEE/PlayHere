import { Title1 } from "@fluentui/react-components";
import { AnnouncementStyle } from "./style";
import AnnounceComponent from "../AnnouncePost/Announce";

export default function AnnouncePage(){
    const Style = AnnouncementStyle();

    return(
        <div className={Style.root}>
            <div className={Style.clild}>
                <Title1>공지사항</Title1>
                <AnnounceComponent postID={123} shortDesc="더 안전해진 보안과 새로운 기술을 적용한 R323 업데이트를 소개합니다" thumbnailURL="https://grnaqmvtqsslvrivlqob.supabase.co/storage/v1/object/public/blog/92c491e6-4824-4672-9090-2cea03b212b7_1x.webp" title="R232 업데이트 노트" key={124}/>
            </div>
        </div>
    )
}