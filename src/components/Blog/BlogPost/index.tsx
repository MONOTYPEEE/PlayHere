import { Body1, Card, Image, Subtitle1, Subtitle2, Title3 } from "@fluentui/react-components";
import { BlogPostStyle } from "./style";
import useBlogThumb from "@/hooks/useBlogThumb";
import { useRouter } from "next/router";
import TimeDiffBlock from "../TimeDiffBlock";

export default function BlogPost({id, title, shortDesc, created}:BlogList){
    const Style = BlogPostStyle();
    const thumbURL = useBlogThumb(id);
    const r = useRouter();
    
    function openArticle(){
        r.push(`/blog/${id}`);
    }

    return(
        <Card appearance="subtle" className={Style.root} onClick={openArticle}>
            <Image src={thumbURL} alt="커버 이미지" shape="rounded" shadow/>
            <Title3>{title}</Title3>
            <Subtitle1>{shortDesc}</Subtitle1>
            <TimeDiffBlock as={Subtitle2} time={created} transparent/>
        </Card>
    )
}