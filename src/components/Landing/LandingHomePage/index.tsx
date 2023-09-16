import LoginComponent from "../LoginComponent";
import LandingTextSection from "../LandingTextSection";
import { LandingTextSectionStyle } from "../LandingTextSection/style";

export default function LandingHomePage(){
    const style = LandingTextSectionStyle();

    const backgroundPattern = {
        background: 'radial-gradient(circle at center,#A489FF 0%, transparent 75%)'
    }

    return(
        <div className={style.Section1} style={backgroundPattern}>
            <LoginComponent/>
            <LandingTextSection/>
        </div>
    )
}