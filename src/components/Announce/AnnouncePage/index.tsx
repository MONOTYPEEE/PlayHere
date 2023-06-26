import { Title1 } from "@fluentui/react-components";
import { AnnouncementStyle } from "./style";
import AnnounceComponent from "../AnnouncePost/AnnounceComponenet";
import useNotice from "@/hooks/useNotice";

export default function AnnouncePage(){
    const Style = AnnouncementStyle();
    const data = useNotice();

    return(
        <div className={Style.root}>
            <div className={Style.clild}>
                <Title1>공지사항</Title1>
                {data.map((d)=>{
                    return <AnnounceComponent id={d.id} shortDesc={d.shortDesc} title={d.title} Created={d.Created} key={d.id} body={d.body}/>
                })}
            </div>
        </div>
    )
}