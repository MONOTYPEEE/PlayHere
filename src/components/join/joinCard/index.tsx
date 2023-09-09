import { Button, Card, Field, Input, Persona, Title2 } from "@fluentui/react-components";
import { bundleIcon, DoorArrowLeft24Filled, DoorArrowLeft24Regular } from "@fluentui/react-icons";

const DoorArrowLeftBundle = bundleIcon(DoorArrowLeft24Filled, DoorArrowLeft24Regular)

export default function JoinCard(){
    return(
        <Card>
            <Title2>세션에 참가</Title2>
            <Persona size="small" name={"명 온라인"} textAlignment="center" />
            <Field label="이름" hint="사용자 목록과 미디어를 추가할 때에 표시됩니다">
                <Input/>
            </Field>
            <Button icon={<DoorArrowLeftBundle/>} appearance="primary">참가</Button>
        </Card>
    )
}