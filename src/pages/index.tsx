import { LandingTabState } from "@/atoms/LandingAtom";
import AnnouncePage from "@/components/Blog/BlogPage";
import LandingHeader from "@/components/Landing/LandingHeader";
import LandingHomePage from "@/components/Landing/LandingHomePage";
import { useRecoilValue } from "recoil";

export default function Home() {
    const TabState = useRecoilValue<string>(LandingTabState);

    return (
        <>
            <LandingHeader/>
            {TabState==="/" && <LandingHomePage/>}
            {TabState==="/blog" && <AnnouncePage/>}
        </>
    )
}
