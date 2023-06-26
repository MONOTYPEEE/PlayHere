import { Body1, Card, Image, Title3 } from "@fluentui/react-components";
import { type } from "os";
import { AnnounceStyle } from "./style";
import useNoticeThumb from "@/hooks/useNoticeThumb";

type AnnounceType = {
    postID: string,
    title: string,
    shortDesc: string,
}

export default function AnnounceComponent({postID, title, shortDesc}:AnnounceType){
    const Style = AnnounceStyle();
    const thumbURL = useNoticeThumb(postID);

    return(
        <Card appearance="subtle">
            <Image src={thumbURL} alt="커버 이미지" shape="rounded" shadow/>
            <Title3>{title}</Title3>
            <Body1>{shortDesc}</Body1>
        </Card>
    )
}