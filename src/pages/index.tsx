import { LandingTabState } from "@/atoms/LandingAtom";
import LandingAnnouncePage from "@/components/LandingAnnouncePage";
import LandingHeader from "@/components/LandingHeader";
import LandingHomePage from "@/components/LandingHomePage";
import LandingWhatisPage from "@/components/LandingWhatisPage";
import { useRecoilState } from "recoil";

export default function Home() {
    const [TabState, setTabState] = useRecoilState<string>(LandingTabState);

    return (
        <>
            <LandingHeader/>
            {TabState==="1" && <LandingHomePage/>}
            {TabState==="2" && <LandingWhatisPage/>}
            {TabState==="3" && <LandingAnnouncePage/>}
        </>
    )
}
