import { UrlDirectoryState } from "@/atoms/UrlDirectoryAtom";
import AnnouncePage from "@/components/Blog/BlogPage";
import LandingHeader from "@/components/Landing/LandingHeader";
import LandingHomePage from "@/components/Landing/LandingHomePage";
import { useRecoilValue } from "recoil";

export default function Home() {
    const TabState = useRecoilValue<string>(UrlDirectoryState);

    return (
        <>
            <LandingHeader/>
            {TabState==="/" && <LandingHomePage/>}
            {TabState==="/blog" && <AnnouncePage/>}
        </>
    )
}
