import { LandingTabState } from "@/atoms/LandingAtom";
import AnnouncePage from "@/components/Announce/AnnouncePage";
import LandingHeader from "@/components/Landing/LandingHeader";
import LandingHomePage from "@/components/Landing/LandingHomePage";
import { useRecoilValue } from "recoil";

export default function Home() {
    const TabState = useRecoilValue<string>(LandingTabState);

    return (
        <>
            <LandingHeader/>
            {TabState==="1" && <LandingHomePage/>}
            {TabState==="2" && <AnnouncePage/>}
        </>
    )
}
