import useBlogThumb from "@/hooks/useBlogThumb";
import useBlogArticle from "@/hooks/useBlogArticle";
import { BlogArticlePageStyle } from "./style";
import { Image, LargeTitle, Subtitle1, Subtitle2, Divider } from "@fluentui/react-components";
import Markdown from "../Markdown";
import { useRouter } from "next/router";
import TimeDiffBlock from "../TimeDiffBlock";

export default function BlogPostPage(){
    const r = useRouter();
    const articleId = r.query.id as string;
    const style = BlogArticlePageStyle();
    const data = useBlogArticle(articleId);
    const thumb = useBlogThumb(articleId);

    return(
        <div className={style.clild}>
            <Image src={thumb} shadow shape="rounded"/>
            <LargeTitle>{data?.title}</LargeTitle>
            <Subtitle1 className={style.transparent}>{data?.shortDesc}</Subtitle1>
            <TimeDiffBlock time={data?.created}/>
            <Divider/>
            <Markdown body={data?.body}/>
        </div>
    )
}