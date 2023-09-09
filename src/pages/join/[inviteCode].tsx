import NowPlayingCard from "@/components/join/NowPlayingCard"
import JoinCard from "@/components/join/joinCard"
import { supabase } from "@/lib/supabaseInit"
import { Center } from "@/styles/center"
import { Dialog, DialogSurface, DialogBody, DialogTitle, DialogContent, DialogActions, DialogTrigger, Button } from "@fluentui/react-components"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function InviteCode(){
    const router = useRouter()
    const centerStyle = Center()
    const [IsErrorOpen, setIsErrorOpen] = useState<boolean>(false)

    useEffect(()=>{
        if(router.isReady){
            supabase
                .from('session')
                .select('*')
                .eq('inviteCode', router.query.inviteCode)
                .single()
                .then(({data, error})=>{
                    if(data === null){
                        setIsErrorOpen(true)
                    }
                })
        }
    },[router.isReady])

    return(
        <div className={centerStyle.flex} style={{gap: '16px', flexDirection: 'column'}}>
            {!IsErrorOpen && 
                <>
                    <JoinCard/>
                    <NowPlayingCard/>
                </>
            }
            <Dialog open={IsErrorOpen}>
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
        </div>
    )
}
