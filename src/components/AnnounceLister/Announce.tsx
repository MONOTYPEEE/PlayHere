import { Body1, Image, Title3 } from "@fluentui/react-components";
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
        <div className={Style.root}>
            <Image src={thumbnailURL} />
            <Title3>{title}</Title3>
            <Body1>{shortDesc}</Body1>
        </div>
    )
}