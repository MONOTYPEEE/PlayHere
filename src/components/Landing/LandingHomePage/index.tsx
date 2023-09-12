import { Body1, Display, makeStyles, Image, tokens } from "@fluentui/react-components";
import LoginComponent from "../LoginComponent";

export default function LandingHomePage(){
    const style = Style();

    const backgroundPattern = {
        background: 'radial-gradient(circle at center,#A489FF 0%, transparent 75%)'
    }

    return(
        <div className={style.Section1} style={backgroundPattern}>
            <LoginComponent/>
            <div className={style.Section1Inner}>
                <Image src="/asset/playHere_Combo.svg" width={128} color="red"/>
                <Display>우리, 여기서<br/>플레이!</Display>
                <Body1>PlayHere는 로컬 음악 공유 서비스입니다<br/>같은 공간에서 함께 서로의 음악을 나눠보세요</Body1>
            </div>
        </div>
    )
}

const Style = makeStyles({
    Section1:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: tokens.spacingHorizontalXXXL,
        height: '100vh'
    },
    Section1Inner:{
        display:'flex',
        flexDirection:'column'
    }
})