import { Image, Display, Body1,  } from "@fluentui/react-components"
import { LandingTextSectionStyle } from "./style"

export default function LandingTextSection(){
    const style = LandingTextSectionStyle()

    return(
        <div className={style.Section1Inner}>
            <Image src="/asset/playHere_Combo.svg" width={128} color="red"/>
            <Display>우리, 여기서<br/>플레이!</Display>
            <Body1>PlayHere는 로컬 음악 공유 서비스입니다<br/>같은 공간에서 함께 서로의 음악을 나눠보세요</Body1>
        </div>
    )
}