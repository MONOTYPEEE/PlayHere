import { Button, Card, Field, Input, Persona, Title2 } from "@fluentui/react-components";
import { bundleIcon, DoorArrowLeft24Filled, DoorArrowLeft24Regular } from "@fluentui/react-icons";
import { useRouter } from "next/router";

const DoorArrowLeftBundle = bundleIcon(DoorArrowLeft24Filled, DoorArrowLeft24Regular)

interface JoinCardPropsType{
    sessionID: string;
}

export default function JoinCard({ sessionID }:JoinCardPropsType){
    const router = useRouter()

    return(
        <Card>
            <Title2>세션에 참가</Title2>
            {/* <Persona size="small" name={"명 온라인"} textAlignment="center" />
            <Field label="이름" hint="사용자 목록과 미디어를 추가할 때에 표시됩니다">
                <Input/>
            </Field> */}
            <Button icon={<DoorArrowLeftBundle/>} appearance="primary" onClick={()=> router.push(`/session/${sessionID}`)}>참가</Button>
        </Card>
    )
}