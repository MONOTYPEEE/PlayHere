import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger } from "@fluentui/react-components";
import { useRouter } from "next/router";

interface ErrorAlertType{
    isOpen: boolean
}

export default function ErrorAlert({isOpen}:ErrorAlertType){
    const router = useRouter()

    return(
        <Dialog open={isOpen}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>오류</DialogTitle>
                    <DialogContent>
                        세션 또는 초대 코드가 유효하지 않습니다
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger>
                            <Button appearance="primary" onClick={()=>router.push('/join')}>확인</Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}