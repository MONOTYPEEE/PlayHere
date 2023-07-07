import { Body1, Card, Image, Subtitle1, Title3 } from "@fluentui/react-components";
import { BlogPostStyle } from "./style";
import useBlogThumb from "@/hooks/useBlogThumb";
import { useRouter } from "next/router";

export default function BlogPost({id, title, shortDesc, Created}:BlogPost){
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
            <Body1>{Created}</Body1>
        </Card>
    )
}