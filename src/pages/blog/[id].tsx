import BlogPostPage from "@/components/Blog/BlogPostPage";
import { BlogArticlePageStyle } from "@/components/Blog/BlogPostPage/style";
import LandingHeader from "@/components/Landing/LandingHeader";

export default function BlogPost(){
    const style = BlogArticlePageStyle();

    return(
        <>
            <LandingHeader/>
            <div className={style.root}>
                <BlogPostPage/>
            </div>
        </>
    )
}