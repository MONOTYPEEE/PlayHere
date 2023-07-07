import { BlogPageStyle } from "@/components/Blog/BlogPage/style";
import LandingHeader from "@/components/Landing/LandingHeader";
import { useRouter } from "next/router"

export default function BlogPost(){
    const r = useRouter();
    const style = BlogPageStyle();

    return(
        <>
            <LandingHeader/>
            <div className={style.root}>
                <div className={style.clild}>
                    {r.query.id}
                </div>
            </div>
            
        </>
    )
}