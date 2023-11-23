import { supabase } from "@/util/supabaseInit"
import { Button, Dialog, DialogActions, DialogBody, DialogSurface, DialogTitle, DialogTrigger, Input, Field, Spinner } from "@fluentui/react-components"
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
        setIsLoading(false)
        if(router.isReady){
            supabase.auth.getSession().then(d=>{
                setUserID(d.data.session?.user.id)
            })
        }
    },[router.isReady])

    function createSession(){
        setIsLoading(true)
        supabase
        .from('session')
        .insert({
            title: sessionTitle === '' ? '새 세션' : sessionTitle,
            hostUUID: userID
        })
        .then(({data, error})=>{
            setIsLoading(false)
            if(error){
                console.log(error)
                return
            }
            supabase
                .from('session')
                .select()
                .eq('hostUUID', userID)
                .single()
                .then(({data, error})=>{
                    if(data){
                        router.push(`/session/${data.id}`)
                    }
                })
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
                    <DialogTrigger action="open">
                        <Button appearance="primary" onClick={createSession} disabled={isLoading}>{isLoading ? <Spinner size="tiny"/> : '생성'}</Button>
                    </DialogTrigger>
                    <DialogTrigger disableButtonEnhancement>
                        <Button>닫기</Button>
                    </DialogTrigger>
                </DialogActions>
            </DialogSurface>
        </Dialog>
    )
}