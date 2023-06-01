import { Button, Card, Divider, Input, Label, Subtitle2, Title2, makeStyles, tokens } from "@fluentui/react-components";
import { DoorArrowLeft24Filled, DoorArrowLeft24Regular, PersonCircle24Filled, PersonCircle24Regular, bundleIcon } from "@fluentui/react-icons";

export default function HomeLoginComponent(){
    const style = Style();
    const DoorArrowLeftBundle = bundleIcon(DoorArrowLeft24Filled, DoorArrowLeft24Regular);
    const PersonCircleBundle = bundleIcon(PersonCircle24Filled, PersonCircle24Regular);

    return(
        <Card className={style.root} size="large">
            <Title2>세션 참가하기</Title2>
            <Subtitle2>6자리 참여 코드 입력</Subtitle2>
            <Label size="large" className={style.label}>
                참여 코드
                <Input size="large" type="number"/>
            </Label>
            <Button appearance="primary" icon={<DoorArrowLeftBundle/>}>참여</Button>
            <Divider>세션을 생성하려면</Divider>
            <Button appearance="secondary" icon={<PersonCircleBundle/>}>로그인</Button>
        </Card>
    )
}

const Style = makeStyles({
    root: {
        width: '350px',
        marginTop: tokens.spacingVerticalM
    },
    label: {
        display: 'flex',
        flexDirection:'column',
        rowGap: tokens.spacingVerticalXXS
    }
})