import { IsLoggedinState } from "@/atoms/LoginAtom"
import { supabase } from "@/util/supabaseInit"
import { Button, Dialog, DialogActions, DialogBody, DialogSurface, DialogTitle, DialogTrigger } from "@fluentui/react-components"
import { SignOut24Filled, SignOut24Regular, bundleIcon } from "@fluentui/react-icons"
import { useSetRecoilState } from "recoil"

interface SignOutDialogPropsType{
    setState: React.Dispatch<React.SetStateAction<boolean>>
    state: boolean
}

const SignOutBundle = bundleIcon(SignOut24Filled, SignOut24Regular)

export default function SignOutDialog({ setState, state }:SignOutDialogPropsType){
    const setLoggedIn = useSetRecoilState(IsLoggedinState)

    function signOutHandler(){
        supabase.auth.signOut()
        supabase.auth.onAuthStateChange((event, session)=>{
            if(event === 'SIGNED_OUT'){
                setLoggedIn(false)
            }
        })
        setState(false)
    }

    return(
        <Dialog open={state}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>로그아웃할까요?</DialogTitle>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button onClick={signOutHandler} appearance="primary" icon={<SignOutBundle/>}>로그아웃</Button>
                        </DialogTrigger>
                        <DialogTrigger>
                            <Button onClick={()=>setState(false)}>취소</Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}