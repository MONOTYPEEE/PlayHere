import { Body1, Card, Image, Subtitle1, Title3 } from "@fluentui/react-components";
import { BlogPostStyle } from "./style";
import useBlogThumb from "@/hooks/useBlogThumb";

export default function BlogPost({id, title, shortDesc, Created}:BlogPost){
    const Style = BlogPostStyle();
    const thumbURL = useBlogThumb(id);

    return(
        <Card appearance="subtle">
            <Image src={thumbURL} alt="커버 이미지" shape="rounded" shadow/>
            <Title3>{title}</Title3>
            <Subtitle1>{shortDesc}</Subtitle1>
            <Body1>{Created}</Body1>
        </Card>
    )
}