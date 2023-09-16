import { UrlDirectoryState } from "@/atoms/UrlDirectoryAtom";
import BlogPage from "@/components/Blog/BlogPage";
import LandingHeader from "@/components/Landing/LandingHeader";
import LandingHomePage from "@/components/Landing/LandingHomePage";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
    const [TabState, setTabState] = useRecoilState<string>(UrlDirectoryState);
    const r = useRouter();

    useEffect(()=>{
        setTabState(r.pathname);
    })

    return (
        <>
            <LandingHeader/>
            {TabState==="/" && <LandingHomePage/>}
            {TabState==="/blog" && <BlogPage/>}
        </>
    )
}
