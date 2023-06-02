import { Button, Card, Divider, Input, Label, Body2, Title2, makeStyles, tokens, InputOnChangeData } from "@fluentui/react-components";
import { DoorArrowLeft24Filled, DoorArrowLeft24Regular, PersonCircle24Filled, PersonCircle24Regular, bundleIcon } from "@fluentui/react-icons";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function HomeLoginComponent(){
    const style = Style();
    const router = useRouter();
    const DoorArrowLeftBundle = bundleIcon(DoorArrowLeft24Filled, DoorArrowLeft24Regular);
    const PersonCircleBundle = bundleIcon(PersonCircle24Filled, PersonCircle24Regular);

    const [JoinCode, setJoinCode] = useState<string>('');
    function ValueChange(e: React.ChangeEventHandler<HTMLInputElement>,v:InputOnChangeData){
        setJoinCode(v.value);
    }
    function RouteChange(){
        if(JoinCode.length === 6){
            router.push(`/join/${JoinCode}`);
        }
    }


    return(
        <Card className={style.root} size="large">
            <Title2>세션 참가하기</Title2>
            <Body2>제공받은 6자리 숫자로 이루어진 참여 코드를 입력하거나, 브라우저에서 URL을 열어 참가하세요.</Body2>
            <Label size="large" className={style.label}>
                참여 코드
                <Input size="large" value={JoinCode} onChange={ValueChange}/>
            </Label>
            <Button appearance="primary" icon={<DoorArrowLeftBundle/>} onClick={RouteChange}>참여</Button>
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