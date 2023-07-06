import { Title1 } from "@fluentui/react-components";
import { BlogPageStyle } from "./style";
import BlogPost from "../BlogPost";
import useBlogList from "@/hooks/useBlogList";
import BlogPostLister from "../BlogPostLister";

export default function BlogPage(){
    const Style = BlogPageStyle();
    const data = useBlogList();

    return(
        <div className={Style.root}>
            <div className={Style.clild}>
                <Title1>블로그</Title1>
                <BlogPostLister data={data} />
            </div>
        </div>
    )
}