import { Title1 } from "@fluentui/react-components";
import { BlogPageStyle } from "./style";
import BlogPost from "../BlogPost";
import useBlogList from "@/hooks/useBlogList";

export default function BlogPage(){
    const Style = BlogPageStyle();
    const data = useBlogList();

    return(
        <div className={Style.root}>
            <div className={Style.clild}>
                <Title1>블로그</Title1>
                {data.map((d)=>{
                    return <BlogPost id={d.id} shortDesc={d.shortDesc} title={d.title} Created={d.Created} key={d.id} body={d.body}/>
                })}
            </div>
        </div>
    )
}