import BlogPost from "../BlogPost"
import { BlogPostListerStyle } from "./style";

interface BlogPostListerType{
    data: BlogPost[];
}

export default function BlogPostLister({data}:BlogPostListerType){
    const Style = BlogPostListerStyle();

    return(
        <div className={Style.root}>
            {data.map((d)=>{
                return <BlogPost id={d.id} shortDesc={d.shortDesc} title={d.title} Created={d.created} key={d.id} body={d.body}/>
            })}
        </div>
    )
}