import { Button, Card, Title2 } from "@fluentui/react-components";
import { useRecoilState } from "recoil";
import { SessionTableAtom } from "@/atoms/SessionTableAtom";
import { ControllerCardStyle } from "./style";
import { Next24Filled, Next24Regular, Pause24Filled, Pause24Regular, Play24Filled, Play24Regular, bundleIcon } from "@fluentui/react-icons";

const Pause24Bundle = bundleIcon(Pause24Filled, Pause24Regular)
const Play24Bundle = bundleIcon(Play24Filled, Play24Regular)
const Next24Bundle = bundleIcon(Next24Filled, Next24Regular)

export default function ControllerCard(){
    const style = ControllerCardStyle()
    const [SessionData, setSessionData] = useRecoilState(SessionTableAtom)
    
    return(
        <Card>
            <Title2>지금 재생 중</Title2>
            <div className={style.buttonContainer}>
                {SessionData?.isPlaying ?
                    <Button appearance="primary" size="large" icon={<Pause24Bundle/>}>일시정지</Button>
                    : <Button appearance="primary" size="large" icon={<Play24Bundle/>}>재생</Button>
                }
                <Button appearance="subtle" size="large" icon={<Next24Bundle/>}>건너뛰기</Button>
            </div>
        </Card>
    )
}