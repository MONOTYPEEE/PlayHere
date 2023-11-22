import { supabase } from "@/util/supabaseInit"
import { Button, Dialog, DialogActions, DialogBody, DialogSurface, DialogTitle, DialogTrigger, Input, Field } from "@fluentui/react-components"
import { bundleIcon, AddCircle24Filled, AddCircle24Regular } from "@fluentui/react-icons"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const AddCircleBundle = bundleIcon(AddCircle24Filled, AddCircle24Regular)

export default function CreateSessionDialog(){
    const router = useRouter()
    const [sessionTitle, setSessionTitle] = useState<string>('')
    const [userID, setUserID] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    useEffect(()=>{
        if(router.isReady){
            supabase.auth.getSession().then(d=>{
                setUserID(d.data.session?.user.id)
            })
        }
    },[router.isReady])

    function createSession(){
        supabase
        .from('session')
        .insert({
            title: sessionTitle === '' ? '새 세션' : sessionTitle,
            hostUUID: userID
        })
        .then(({data, error})=>{
            
        })
    }

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
                        <Button appearance="primary" onClick={createSession}>생성</Button>
                    </DialogTrigger>
                    <DialogTrigger disableButtonEnhancement>
                        <Button>닫기</Button>
                    </DialogTrigger>
                </DialogActions>
            </DialogSurface>
        </Dialog>
    )
}