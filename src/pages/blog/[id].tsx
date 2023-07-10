import { BlogArticlePageStyle } from "@/components/Blog/BlogPostPage/style";
import Markdown from "@/components/Blog/Markdown";
import LandingHeader from "@/components/Landing/LandingHeader";
import useBlogArticle from "@/hooks/useBlogArticle";
import useBlogThumb from "@/hooks/useBlogThumb";
import { Image, LargeTitle, Subtitle1, Subtitle2 } from "@fluentui/react-components";
import { useRouter } from "next/router"

export default function BlogPost(){
    const r = useRouter();
    const articleId = r.query.id as string;

    const style = BlogArticlePageStyle();
    const data = useBlogArticle(articleId);

    const thumb = useBlogThumb(articleId);

    return(
        <>
            <LandingHeader/>
            <div className={style.root}>
                <div className={style.clild}>
                    <Image src={thumb} shadow shape="rounded"/>
                    <LargeTitle>{data?.title}</LargeTitle>
                    <Subtitle1>{data?.shortDesc}</Subtitle1>
                    <Subtitle2>{data?.created}</Subtitle2>
                    <Markdown body={data?.body}/>
                </div>
            </div>
        </>
    )
}