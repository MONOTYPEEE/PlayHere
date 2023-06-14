import { Body1, Card, Image, Title3 } from "@fluentui/react-components";
import { type } from "os";
import { AnnounceStyle } from "./style";

type AnnounceType = { //타이핑은 임시입니다 (추후 파일분리/연동 구현 예정)
    postID: number,
    title: string,
    thumbnailURL: string,
    shortDesc: string,
}

export default function AnnounceComponent({postID, thumbnailURL, title, shortDesc}:AnnounceType){
    const Style = AnnounceStyle();

    return(
        <Card appearance="subtle">
            <Image src={thumbnailURL} alt="커버 이미지"/>
            <Title3>{title}</Title3>
            <Body1>{shortDesc}</Body1>
        </Card>
    )
}