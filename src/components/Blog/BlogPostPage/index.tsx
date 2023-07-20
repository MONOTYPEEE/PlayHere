import { useEffect, useState } from "react";
import useBlogThumb from "@/hooks/useBlogThumb";
import useBlogArticle from "@/hooks/useBlogArticle";
import { BlogArticlePageStyle } from "./style";
import { Image, LargeTitle, Subtitle1, Divider } from "@fluentui/react-components";
import Markdown from "../Markdown";
import { useRouter } from "next/router";
import TimeDiffBlock from "../TimeDiffBlock";

export default function BlogPostPage(){
    const r = useRouter();
    const [PageId,setPageId] = useState<string>('');
    const style = BlogArticlePageStyle();
    const ArticleData = useBlogArticle(PageId);
    const thumb = useBlogThumb(PageId);

    useEffect(()=>{
        if(r.isReady){
            setPageId(r.query.id as string);
        }
    },[r.query.id, r.isReady])

    return(
        <div className={style.clild}>
            <Image src={thumb} shadow shape="rounded"/>
            <LargeTitle>{ArticleData.title}</LargeTitle>
            <Subtitle1 className={style.transparent}>{ArticleData.shortDesc}</Subtitle1>
            <TimeDiffBlock as={Subtitle1} time={ArticleData.created} transparent/>
            <Divider/>
            <Markdown body={ArticleData.body}/>
        </div>
    )
}