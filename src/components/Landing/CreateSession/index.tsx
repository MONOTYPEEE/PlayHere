import { Button, Dialog, DialogActions, DialogBody, DialogSurface, DialogTitle, DialogTrigger, Input, Field } from "@fluentui/react-components"
import { bundleIcon, AddCircle24Filled, AddCircle24Regular } from "@fluentui/react-icons"
import { useState } from "react"

const AddCircleBundle = bundleIcon(AddCircle24Filled, AddCircle24Regular)

export default function CreateSessionDialog(){
    const [sessionTitle, setSessionTitle] = useState<string>('')

    return(
        <Dialog modalType="modal">
            <DialogTrigger>
                <Button appearance="secondary" icon={<AddCircleBundle/>}>새 세션 생성</Button>
            </DialogTrigger>
            <DialogSurface>
                    <DialogTitle>새 세션 만들기</DialogTitle>
                <DialogBody>
                    <Field>
                        제목
                        <Input value={sessionTitle} onChange={(e)=>setSessionTitle(e.target.value)} placeholder="새 세션"/>
                    </Field>
                </DialogBody>
                <DialogActions>
                    <DialogTrigger>
                        <Button appearance="primary">생성</Button>
                    </DialogTrigger>
                    <DialogTrigger>
                        <Button>닫기</Button>
                    </DialogTrigger>
                </DialogActions>
            </DialogSurface>
        </Dialog>
    )
}