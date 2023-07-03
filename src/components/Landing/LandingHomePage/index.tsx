import { Body1, Display, makeStyles, tokens } from "@fluentui/react-components";
import LoginComponent from "../LoginComponent";

export default function LandingHomePage(){
    const style = Style();

    return(
        <div className={style.Section1}>
            <LoginComponent/>
            <div className={style.Section1Inner}>
                <Display>우리, 여기서<br/>플레이!</Display>
                <Body1>PlayHere는 어쩌구 소개문구입니다<br/>와 br도 했어요</Body1>
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